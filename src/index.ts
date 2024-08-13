/*this file had all exports that this npm package has that will be import by user to use this npm package*/
import { ParamStore } from './dependencies/paramstore/paramstore';
import { KafkaConfig } from './utils/kafka/config.kafka';
import { KafkaProducer } from './utils/kafka/producer.kafka';
import { NotificationSchema } from './utils/schemaRegistry/notificationSchema.registry';
import { SchemaRegistryS } from './utils/schemaRegistry/registry.util';
const { getKafkaBrokers } = require('./utils/store/kafkaSecret.store');
const { publishToKafka } = require('./utils/kafka/publisher.kafka');
export {
  ParamStore,
  getKafkaBrokers,
  KafkaConfig,
  KafkaProducer,
  publishToKafka,
  NotificationSchema,
  SchemaRegistryS
};

export { IKafkaSecret } from './store/interfaces/kafkaSecret.interface';
export { IMongoSecret } from './store/interfaces/mongoSecret.interface';
export { INotification } from './store/interfaces/notification.interface';
