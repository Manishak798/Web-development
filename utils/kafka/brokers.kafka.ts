import { getSecret } from 'bolt-paramstore';
import { IKafkaSecret } from '../../store/interfaces/kafkaSecret.interface';

export async function getKafkaBrokers(): Promise<IKafkaSecret> {
    const slug = process.env.NODE_ENV_LOCAL === "TRUE" ? "KAFKA_CREDENTIALS_EXTERNAL" : "KAFKA_CREDENTIALS";
    const config = await getSecret(
        `${process.env.PARAMSTORE_PATH}/common/${slug}`
    );
    if (!config.brokers) {
        throw new Error('Kafka brokers configuration not found.');
    }
    config.brokers = JSON.parse(config.brokers);
    return config;
}
