import { Kafka, Producer } from 'kafkajs';

export class KafkaProducer {
    private static producer: Producer

    private constructor() { }

    static async connect(kafka: Kafka) {
        try {
            if(this.producer)
                return;
            this.producer = kafka.producer();
            await this.producer.connect();
        } catch (error) {
            console.log(error);
        }
    }

    static async getProducer(): Promise<Producer> {
        try {
            if (!this.producer)
                throw new Error("Producer not connected");
            
            return this.producer;
        } catch (error) {
            console.log('KafkaProducer: error while connecting', error);
            throw error;
        }
    }

    static async shutdown(): Promise<void> {
        try {
            await this.producer.disconnect();
        } catch (error) {
            console.log('KafkaProducer: error while disconnecting', error);
        }
    }
}