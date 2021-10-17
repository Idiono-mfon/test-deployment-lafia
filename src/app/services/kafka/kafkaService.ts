import { DeliveryReport, LibrdKafkaError, Message, Metadata, NumberNullUndefined } from 'node-rdkafka';
import { logger } from '../../utils';
import { KafkaSetup } from './kafkaSetup';

export class KafkaService {

  public static producer(topic: string, message: any) {
    logger.info('Running KafkaService.producer');

    const kafkaProducer = KafkaSetup.instantiateKafkaProducer();

    return new Promise((resolve, reject) => {
      kafkaProducer.connect({ topic }, (error: LibrdKafkaError, data: Metadata) => {
        if (error) {
          return reject(error);
        }

        logger.info(`Kafaka Producer connected successfully.`);
      });

      kafkaProducer.on('ready', () => {
        try {
          // Additionally you can add serializers to modify the value of a produce
          // for a key or value before it is sent over to Kafka.
          kafkaProducer.setValueSerializer((value) => Buffer.from(JSON.stringify(value)));

          kafkaProducer.produce(
            topic,
            null,
            message,
            null,
            Date.now(), (error: any, offset: NumberNullUndefined) => {
              if (error) {
                return reject(error);
              }

              // The offset if our acknowledgement level allows us to receive delivery offsets
              logger.info(`Delivery offset: ${offset}`);
              logger.info('');
            });

          // Poll for events
          kafkaProducer.poll();

          kafkaProducer.on('delivery-report', (error: LibrdKafkaError, report: DeliveryReport) => {
            // Report of delivery statistics here:
            logger.info('');
            logger.info('Sent a message via kafka');
            logger.info(`Message: ${JSON.stringify(JSON.parse(report?.value as unknown as string))}`)
            logger.info(`Via kafka topic: ${report?.topic}`);
            logger.info(`Sent Date: ${new Date(report?.timestamp!)}`);
          });

          // Any errors we encounter, including connection errors
          kafkaProducer.on('event.error', (error: LibrdKafkaError) => {
            logger.error('Error sending message to Kafka:', error);
          })
        } catch (e) {
          return reject(e);
        }
      })
    })
  }

  public static async consumer() {
    logger.info('Running KafkaService.consumer');

    const kafkaConsumer = KafkaSetup.instantiateKafkaConsumer();

    return new Promise((resolve, reject) => {
      // Flowing mode
      kafkaConsumer
        .connect({}, (error: LibrdKafkaError, data: Metadata) => {
          if (error) {
            return reject(error);
          }

          logger.info(`Kafaka Consumer connected successfully.`);
        })
        .on('ready', () => {
          kafkaConsumer.subscribe(['creatResource']);

          // Consume from the topics. This is what determines
          // the mode we are running in. By not specifying a callback (or specifying
          // only a callback) we get messages as soon as they are available.
          kafkaConsumer.consume();
        })
        .on('data', (data: Message) => {
          // Output the actual message contents
          logger.info('Receive a message from Kafka');
          logger.info(`Message: ${data?.value?.toString()}`);
          logger.info(`From Kafka Topic: ${data?.topic}`);
          logger.info(`Received Date: ${new Date(data?.timestamp!)}`);

          return resolve(JSON.stringify(JSON.parse(data.value?.toString()!)));
        })
        .on('event.error', (error: LibrdKafkaError) => {
          // Output the actual message contents
          logger.error(`Error consuming data from kafka: `, error);

          return reject(error);
        })
    })
  }
}
