import dotenv from 'dotenv';
import { Kafka } from 'kafkajs';
import { IKafkaSecret } from '../../store/interfaces/kafkaSecret.interface';

dotenv.config();

export class KafkaConfig {
  private static config: Kafka;

  private constructor() { }

  static getConfig(config: IKafkaSecret, clientId:string): Kafka {
    if (!this.config) {
      this.config = new Kafka({
        clientId: clientId,
        brokers: config.brokers,
        sasl: {
          mechanism: "plain",
          username: config.username,
          password: config.password
        }
      });
    }

    return this.config
  }
}