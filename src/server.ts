import { IBoltChargerNotificationV2 } from './store/interfaces/boltChargerNotificationV2.interface';
import * as dotenv from 'dotenv';
import express from 'express';
import {
  ParamStore,
  getKafkaBrokers,
  KafkaConfig,
  KafkaProducer,
  publishToKafka,
  NotificationSchema,
  SchemaRegistryS,
  INotification,
  IKafkaSecret
} from './index';
import { Kafka } from 'kafkajs';
import { IAssetsTriggerNotification } from './store/interfaces/assestTriggerNotification.interface';
import { IAuthNotificationSchema } from './store/interfaces/authEmailNotification.interface';

class KafkaServer {
    public express: express.Application;
    private paramStore: ParamStore | null = null;  
    private schemaRegistry: SchemaRegistryS | null = null;  
    private notificationSchema: NotificationSchema | null = null;  

    constructor() {
        dotenv.config();
        this.express = express();
    }

    public async init(
        paramStorePath: string,
        nodeEnvLocal: string,
        clientId: string,
        schemaRegistryUrl: string,
        schemaSubject: string,
        schemaName: string
    ): Promise<void> {
        await this.setupKafka(paramStorePath, nodeEnvLocal, clientId, schemaRegistryUrl, schemaSubject,schemaName);
        this.setupShutdownHandlers();
        console.log("---------------------------------------------");
        console.log("Kafka Server is ready.");
        console.log("---------------------------------------------");
    }

    private async setupKafka(
        paramStorePath: string,
        nodeEnvLocal: string,
        clientId: string,
        schemaRegistryUrl: string,
        schemaSubject: string,
        schemaName: string
    ): Promise<void> {
        // Initialize ParamStore
        this.paramStore = new ParamStore(paramStorePath, nodeEnvLocal);
        await this.paramStore.getParams();

        // Get Kafka brokers
        const kafkaConnectionDetails: IKafkaSecret = await getKafkaBrokers();
        const kafka: Kafka = KafkaConfig.getConfig(kafkaConnectionDetails, clientId);
        await KafkaProducer.connect(kafka);

        // Connect to Kafka
        await KafkaProducer.connect(kafka);

        // Connect to Schema Registry
        SchemaRegistryS.connect(schemaRegistryUrl);
        this.schemaRegistry = SchemaRegistryS.getInstance();

        // Register Notification schema
        this.notificationSchema = NotificationSchema.getInstance();
        await this.notificationSchema.register(schemaName,schemaSubject);
    }

    private setupShutdownHandlers(): void {
        process.on('SIGINT', this.handleShutdown);
        process.on('SIGTERM', this.handleShutdown);
    }

    private handleShutdown = async (): Promise<void> => {
        console.log('Shutting down Kafka Server...');
        await KafkaProducer.shutdown();
        process.exit(0);
    }

    public async produceMessage(topic: string, message: IAssetsTriggerNotification | IBoltChargerNotificationV2 | INotification, schemaName: string): Promise<void> {
        if (!this.notificationSchema) {
            throw new Error("Notification schema is not initialized");
        }
        let key = message?.user?.inAppNotificationUserId;
        const schemaId = await this.notificationSchema.getSchemaId(schemaName);
        await publishToKafka(topic, schemaId, { key: key , value: message });
        console.log(`Message published to topic: ${topic}`);
    }
}

export const app = new KafkaServer();