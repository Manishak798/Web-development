import { COMPATIBILITY, SchemaRegistry, SchemaType } from '@kafkajs/confluent-schema-registry';
import { ProtoConfluentSchema } from '@kafkajs/confluent-schema-registry/dist/@types';
import { SchemaRegistryS } from './registry.util';

const fs = require('fs')
const path = require('path');
const protoSchemaBuffer = require('protocol-buffers-schema');

export class NotificationSchema {
    private static instance: NotificationSchema;
    private registry: SchemaRegistry;
    private schemaIds: Map<string, number> = new Map();
    private readonly protoFiles: Map<string, string> = new Map();
    private currentSchemaName: string = '';
    private constructor() {
        this.registry = SchemaRegistryS.getInstance(); 
        this.protoFiles.set('Notification',path.join(__dirname, '..','..', 'store', 'schemas', 'proto', 'Notification.proto'));
        this.protoFiles.set('AssetsTriggersNotification',path.join(__dirname, '..','..', 'store', 'schemas', 'proto', 'AssetsTriggersNotification.proto'));
        this.protoFiles.set('AuthEmaiNotification',path.join(__dirname, '..','..', 'store', 'schemas', 'proto', 'AuthEmaiNotification.proto'));
        this.protoFiles.set('BoltChargerNotification',path.join(__dirname, '..','..', 'store', 'schemas', 'proto', 'BoltChargerNotification.proto'));
        this.protoFiles.set('BoltChargerNotificationV2',path.join(__dirname, '..','..', 'store', 'schemas', 'proto', 'BoltChargerNotificationV2.proto'));
    }

    static getInstance(): NotificationSchema {
        if(!this.instance)
            this.instance = new NotificationSchema();

        return this.instance;
    }

    async register(schemaName: string,schemaSubject:string): Promise<void> {
        try {
            const schema = this.getSchema(schemaName);
            const protoSchema: ProtoConfluentSchema = {
                schema,
                type: SchemaType.PROTOBUF
            };
            const { id } = await this.registry.register(protoSchema, { subject: schemaSubject, compatibility: COMPATIBILITY.FULL });
            this.schemaIds.set(schemaName, id);
            this.currentSchemaName = schemaName;            
        } catch (e) {
            console.log(e);
            throw e;
        }
    }

    async getSchemaId(schemaName: string): Promise<number> {
        if (!this.schemaIds.has(schemaName)) {
            throw new Error(`Schema ${schemaName} is not registered`);
        }
        return this.schemaIds.get(schemaName)!;
    }

    getCurrentSchemaName(): string {
        return this.currentSchemaName;
    }

    /**
     * Reads schema from protobuf file and stringifies it. Will throw an error in case proto file has multiple message
     * @returns Stringified schema
     */
    private getSchema(schemaName: string): string {
        const schemaPath = this.protoFiles.get(schemaName);
        if (!schemaPath) {
            throw new Error(`Schema ${schemaName} not found`);
        }
        const dataRead = fs.readFileSync(schemaPath);
        const notificationMessage = protoSchemaBuffer.parse(dataRead);
        if (notificationMessage?.messages?.length > 1)
            throw new Error(`One schema file cannot have multiple schemas`);
        return protoSchemaBuffer.stringify(notificationMessage);
    }
}
