import { inject, injectable } from 'inversify';
import _ from 'lodash';
import { DeliveryReport, LibrdKafkaError, Message, NumberNullUndefined } from 'node-rdkafka';
import { Env } from '../../config/env';
import TYPES from '../../config/types';
import { IPatient, IPractitioner } from '../../models';
import { forWho, logger } from '../../utils';
import { Password } from '../../utils/password';
import { eventName, eventService } from '../eventEmitter';
import { BroadcastData } from '../notifications';
import { PatientService } from '../patients';
import { PractitionerService } from '../practitioners';
import { UserService } from '../users';
import { KafkaSetup, successResponseType } from './kafkaSetup';

const env = Env.all();

@injectable()
export class KafkaService {

  @inject(TYPES.UserService)
  private readonly userService: UserService;
  @inject(TYPES.PractitionerService)
  private readonly practitionerService: PractitionerService;
  @inject(TYPES.PatientService)
  private readonly patientService: PatientService;
  @inject(TYPES.KafkaSetup)
  private readonly kafkaSetup: KafkaSetup;

  public producer(topic: string, message: any) {
    logger.info('Running KafkaService.producer');

    const kafkaProducer = this.kafkaSetup.instantiateKafkaProducer();

    return new Promise((resolve, reject) => {
      kafkaProducer.connect({ topic }, (error: LibrdKafkaError) => {
        if (error) {
          return reject(error);
        }

        logger.info(`Kafaka Producer connected successfully.`);
      });

      kafkaProducer.on('ready', () => {
        try {
          // Additionally you can add serializers to modify the value of a produce
          // for a key or value before it is sent over to Kafka.
          kafkaProducer.setValueSerializer((value: any) => Buffer.from(JSON.stringify(value)));

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

  public consumer() {
    logger.info('Running KafkaService.consumer');
    const consumerTopics = env.kafka_consumer_topics?.split(',');
    const producerTopic = env.kafka_erpnext_producer_topic;

    const topics = consumerTopics.map((topic: any) => topic?.trim());

    const kafkaConsumer = this.kafkaSetup.instantiateKafkaConsumer();

    kafkaConsumer
      .connect({}, (error: LibrdKafkaError) => {
        if (error) {
          return error;
        }

        logger.info(`Kafka Consumer connected successfully.`);
      })
      .on('ready', () => {
        kafkaConsumer.subscribe(topics);

        // Consume from the topics. This is what determines
        // the mode we are running in. By not specifying a callback (or specifying
        // only a callback) we get messages as soon as they are available.
        kafkaConsumer.consume();
      })
      .on('data', async (dataMsg: Message) => {
        if (dataMsg) {
          const dataString = dataMsg?.value?.toString();

          let dataJson: any = {};

          // Output the actual message contents
          logger.info('Receive a message from Kafka');
          logger.info(`Message: ${dataString}`);
          logger.info(`From Kafka Topic: ${dataMsg?.topic}`);
          logger.info(`Received Date: ${new Date(dataMsg?.timestamp!)}`);

          try {
            dataJson = JSON.parse(dataString!);
          } catch (e: any) {
            const producerMsg = this.kafkaSetup.structureErrorData('The payload is not a valid JSON. Did you remember to stringify it?');
            await this.producer(producerTopic, producerMsg);

            return;
          }

          const data = dataJson?.data;
          const resource_type = dataJson?.resource_type;
          const resource_id = dataJson?.resource_id;
          const email = dataJson?.email;

          if (resource_id && data) {
            try {
              await this.userService.createUser({
                resource_id,
                resource_type,
                ...data,
              });

              return;
            } catch (e: any) {
              const producerMsg = this.kafkaSetup.structureErrorData(e.message, resource_type);
              await this.producer(producerTopic, producerMsg);

              return;
            }
          }

          if (email && !_.isEmpty(data)) {
            const { first_name, last_name, password, gender } = data;
            const dataToUpdate: any = {};

            if (gender) dataToUpdate.gender = gender;
            if (last_name) dataToUpdate.last_name = last_name;
            if (first_name) dataToUpdate.first_name = first_name;
            if (password) dataToUpdate.password = Password.hash(password);

            const existingUser = await this.userService.getOneUser({ email });

            if (existingUser) {
              await this.userService.updateUser(existingUser?.id!, dataToUpdate);
            }
          }

          if (resource_type && !_.isEmpty(data)) {
            let resource: IPatient | IPractitioner | any = {};

            if (resource_type?.toLowerCase() === forWho.patient) {
              try {
                resource = await this.patientService.createPatient(data);
              } catch (e: any) {
                logger.error('Error creating patient:', e);
                const producerMsg = this.kafkaSetup.structureErrorData(e.message, resource_type);
                await this.producer(producerTopic, producerMsg);

                return;
              }
            }

            if (resource_type?.toLowerCase() === forWho.practitioner) {
              try {
                resource = await this.practitionerService.createPractitioner(data);
              } catch (e: any) {
                logger.error('Error creating practitioner:', e);
                const producerMsg = this.kafkaSetup.structureErrorData(e.message, resource_type);
                await this.producer(producerTopic, producerMsg);

                return;
              }
            }

            const producerMsg = this.kafkaSetup.structureSuccessData(successResponseType.default, dataJson, 'Resource created successfully', resource?.user?.id);
            await this.producer(producerTopic, producerMsg);
          } else {
            logger.error('Error creating resource: resource_type and data fields are required!')
            const producerMsg = this.kafkaSetup.structureErrorData('Error creating resource: resource_type and data fields are required!');
            await this.producer(producerTopic, producerMsg);
          }
        }
      })
      .on('event.error', (error: LibrdKafkaError) => {
        // Output the actual message contents
        logger.error(`Error consuming data from kafka: `, error);

        return error;
      })
  }

  public handleEvents() {
    eventService
      .on(eventName.newPatient, async (patientId, data) => {
        const kafkaProducerMsg = this.kafkaSetup
          .structureSuccessData(successResponseType.default, data, 'Resource created successfully', patientId);

        await this.producer(env.kafka_erpnext_producer_topic, kafkaProducerMsg);
      })
      .on(eventName.newPractitioner, async (practitionerId, data) => {
        const kafkaProducerMsg = this.kafkaSetup
          .structureSuccessData(successResponseType.default, data, 'Resource created successfully', practitionerId);

        await this.producer(env.kafka_erpnext_producer_topic, kafkaProducerMsg);
      })
      .on(eventName.newEncounter, async (encounterId, data) => {
        const kafkaProducerMsg = this.kafkaSetup
          .structureSuccessData(successResponseType.fhir, data, 'New encounter published successfully', encounterId);

        await this.producer(env.kafka_erpnext_producer_topic, kafkaProducerMsg);
      })
      .on(eventName.newMedia, async (mediaId, data) => {
        const kafkaProducerMsg = this.kafkaSetup
          .structureSuccessData(successResponseType.fhir, data, 'New media published successfully', mediaId);

        await this.producer(env.kafka_erpnext_producer_topic, kafkaProducerMsg);
      })
      .on(eventName.newBroadcast, async (data: BroadcastData) => {
        const kafkaProducerMsg = this.kafkaSetup
          .structureSuccessData(successResponseType.broadcast, data, 'New broadcast published successfully');

        await this.producer(env.kafka_erpnext_producer_topic, kafkaProducerMsg);
      })
      .on(eventName.error, () => {
        logger.error('Error creating/publishing events');
      });
  }
}
