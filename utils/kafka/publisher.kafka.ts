import { ProducerRecord } from 'kafkajs';
import { SchemaRegistryS } from './../schemaRegistry/registry.util';
import { KafkaProducer } from './producer.kafka';

export async function publishToKafka(topic: string, schemaId: number, message: {key: string, value: any}) {
    try {
        const encodedMessage = await SchemaRegistryS.getInstance().encode(schemaId, message.value);
        const payload: ProducerRecord = { topic, messages: [{ key: message.key, value: encodedMessage }] };
        const producer = await KafkaProducer.getProducer();
        await producer.send(payload);
        console.log(`✅ Published to kafka for key: ${message.key}`);
    } catch (e) {
        console.log(`🔴 publishToKafka Error: ${message}`, e);
    }
}
