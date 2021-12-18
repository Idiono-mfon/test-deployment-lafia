import { inject, injectable } from 'inversify';
import _ from 'lodash';
import { Env } from '../../../config/env';
import TYPES from '../../../config/types';
import { IPatient, IPractitioner } from '../../../models';
import { forWho, logger } from '../../../utils';
import { Password } from '../../../utils/password';
import { eventName, eventService } from '../../eventEmitter';
import { BroadcastData } from '../../notifications';
import { PatientService } from '../../patients';
import { PractitionerService } from '../../practitioners';
import { IUserService } from '../../users';
import { RabbitMqSetup, successResponseType } from './rabbitMqSetup';

const env = Env.all();

@injectable()
export class RabbitMqService {
  @inject(TYPES.PatientService)
  private readonly patientService: PatientService;
  @inject(TYPES.PractitionerService)
  private readonly practitionerService: PractitionerService;
  @inject(TYPES.UserService)
  private readonly userService: IUserService;
  @inject(TYPES.RabbitMqSetup)
  private readonly rabbitMqSetup: RabbitMqSetup;

  private readonly pubQueue: string;
  private readonly subQueue: string;

  constructor() {
    this.pubQueue = env.rmq_pub_queue;
    this.subQueue = env.rmq_sub_queue;
  }

  public async rmqPublish(msg: any) {
    logger.info('Running RabbitMqService.rmqPublish');
    try {
      const { channel: rmqChannel } = await this.rabbitMqSetup.initRMQ();

      rmqChannel.assertQueue(this.pubQueue, { durable: false });
      rmqChannel.sendToQueue(this.pubQueue, Buffer.from(msg));

      logger.info('[x] Sent a message via RabbitMQ');
      logger.info(`[x] Sent Data: ${msg})`);
      logger.info(`[x] Sent Date: ${new Date().toString()}`);
    } catch (e: any) {
      logger.error(`[x] Error publishing RMQ message:`, e);
    }
  }

  public async rmqSubscribe() {
    logger.info('Running RabbitMqService.rmqSubscribe');

    let rmqChannel: any;

    try {
      const { channel } = await this.rabbitMqSetup.initRMQ();
      rmqChannel = channel;
    } catch (e: any) {
      const rmqPubMsg = this.rabbitMqSetup.structureErrorData(e.message);
      await this.rmqPublish(JSON.stringify(rmqPubMsg));

      return;
    }

    if (!rmqChannel) {
      const rmqPubMsg = this.rabbitMqSetup.structureErrorData('RabbitMQ unable to create channel');
      await this.rmqPublish(JSON.stringify(rmqPubMsg));

      return;
    }

    logger.info('RabbitMQ connection successful');

    rmqChannel.assertQueue(this.subQueue, { durable: false });
    rmqChannel.consume(this.subQueue, async (msg: any) => {
      if (msg) {
        // Acknowledge the received message
        rmqChannel.ack(msg);

        const msgString = msg.content.toString();
        let msgJson: any = {};
        try {
          msgJson = JSON.parse(msgString);
        } catch (e: any) {
          const rmqPubMsg = this.rabbitMqSetup.structureErrorData('The payload is not a valid JSON. Did you remember to stringify it?');
          await this.rmqPublish(JSON.stringify(rmqPubMsg));

          return;
        }

        logger.info('[x] Receive a message via RabbitMQ');
        logger.info(`[x] Received Data: ${msgString})`);
        logger.info(`[x] Received Date: ${new Date().toString()}`);

        let { data, resource_type, resource_id, email } = msgJson;
        resource_type = resource_type?.toLowerCase();

        if (resource_id && data) {
          try {
            await this.userService.create({
              resource_id,
              resource_type,
              ...data,
            });

            return;
          } catch (e: any) {
            const rmqPubMsg = this.rabbitMqSetup.structureErrorData(e.message, resource_type);
            await this.rmqPublish(JSON.stringify(rmqPubMsg));

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

          const existingUser = await this.userService.findOne({ email });

          if (existingUser) {
            await this.userService.update(existingUser?.resourceId!, dataToUpdate);
          }
        }

        if (resource_type && !_.isEmpty(data)) {
          let resource: IPatient | IPractitioner | any = {};

          if (resource_type?.toLowerCase() === forWho.patient) {
            try {
              resource = await this.patientService.create(data);
            } catch (e: any) {
              const rmqPubMsg = this.rabbitMqSetup.structureErrorData(e.message, resource_type);
              await this.rmqPublish(JSON.stringify(rmqPubMsg));

              return;
            }
          }

          if (resource_type?.toLowerCase() === forWho.practitioner) {
            try {
              resource = await this.practitionerService.create(data);
            } catch (e: any) {
              const rmqPubMsg = this.rabbitMqSetup.structureErrorData(e.message, resource_type);
              await this.rmqPublish(JSON.stringify(rmqPubMsg));

              return;
            }
          }

          const rmqPubMsg = this.rabbitMqSetup.structureSuccessData(successResponseType.default, msgJson, 'Resource created successfully', resource?.user?.id);
          await this.rmqPublish(JSON.stringify(rmqPubMsg));
        } else {
          const rmqPubMsg = this.rabbitMqSetup.structureErrorData('Unable to create resource: resource_type and data fields are required!');
          await this.rmqPublish(JSON.stringify(rmqPubMsg));
        }
      }
    });
  }

  public handleEvents() {
    eventService
      .on(eventName.newPatient, async (patientId, data) => {
        const rmqPubMsg = this.rabbitMqSetup
          .structureSuccessData(successResponseType.default, data, 'Resource created successfully', patientId);

        await this.rmqPublish(JSON.stringify(rmqPubMsg));
      })
      .on(eventName.newPractitioner, async (practitionerId, data) => {
        const rmqPubMsg = this.rabbitMqSetup
          .structureSuccessData(successResponseType.default, data, 'Resource created successfully', practitionerId);

        await this.rmqPublish(JSON.stringify(rmqPubMsg));
      })
      .on(eventName.newEncounter, async (encounterId, data) => {
        const rmqPubMsg = this.rabbitMqSetup
          .structureSuccessData(successResponseType.fhir, data, 'New encounter published successfully', encounterId);

        await this.rmqPublish(JSON.stringify(rmqPubMsg));
      })
      .on(eventName.newMedia, async (mediaId, data) => {
        const rmqPubMsg = this.rabbitMqSetup
          .structureSuccessData(successResponseType.fhir, data, 'New media published successfully', mediaId);

        await this.rmqPublish(JSON.stringify(rmqPubMsg));
      })
      .on(eventName.newBroadcast, async (data: BroadcastData) => {
        const rmqPubMsg = this.rabbitMqSetup
          .structureSuccessData(successResponseType.broadcast, data, 'New broadcast published successfully');

        await this.rmqPublish(JSON.stringify(rmqPubMsg));
      })
      .on(eventName.error, () => {
        logger.error('Error creating/publishing events');
      });
  }
}
