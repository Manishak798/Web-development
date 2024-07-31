import { SchemaRegistry } from "@kafkajs/confluent-schema-registry";

export class SchemaRegistryS extends SchemaRegistry{
    private static instance: SchemaRegistryS;

    private constructor(url: string) {
        super({ host: `${url}` });
    }

    static connect(url: string) {
        this.instance = new SchemaRegistryS(url);
    }

    static getInstance() {
        if(!this.instance)
            throw new Error('Schema Registry is not connected yet. First connect to schema registry');
        return this.instance;
    }

    getRegistry(url: string): SchemaRegistryS {
        return SchemaRegistryS.instance;
    }
}