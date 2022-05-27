import { inject, injectable } from 'inversify';
import _ from 'lodash';
import { Env } from '../../../config/env';
import TYPES from '../../../config/types';
import { IPatient, IPractitioner } from '../../../models';
import { forWho, logger } from '../../../utils';
import { Password } from '../../../utils/password';
import { eventName, eventService } from '../../eventEmitter';
import { BroadcastData } from '../../notifications';
import { IPatientService } from '../../patients';
import { IPractitionerService } from '../../practitioners';
import { IUserService } from '../../users';
import { IRabbitMqService, IRabbitMqSetup, successResponseType } from '../interfaces';

@injectable()
export class RabbitMqService implements IRabbitMqService {
  @inject(TYPES.PatientService)
  private readonly patientService: IPatientService;
  @inject(TYPES.PractitionerService)
  private readonly practitionerService: IPractitionerService;
  @inject(TYPES.UserService)
  private readonly userService: IUserService;
  @inject(TYPES.RabbitMqSetup)
  private readonly rabbitMqSetup: IRabbitMqSetup;

  private readonly pubQueue: string;
  private readonly subQueue: string;

  constructor() {
    this.pubQueue = Env.all().rmq_pub_queue;
    this.subQueue = Env.all().rmq_sub_queue;
  }

  public async rmqPublish(msg: any): Promise<void> {
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

  public async rmqSubscribe(): Promise<void> {
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

        const data = msgJson?.data;
        const email = msgJson?.data.email;
        const resource_id = msgJson?.resource_id;
        let resource_type = msgJson?.resource_type;

        resource_type = resource_type?.toLowerCase();

        const existingUser = await this.userService.findOne({ email });
        if (existingUser){
            await this.updateExistingUser(email, data);
            return;
        }
        await this.createUserFromERPNext(resource_id, data, resource_type);
        
        // await this.createUserFromERPNext(resource_id, data, resource_type);
        // await this.updateExistingUser(email, data);
        // await this.createPatientOrPractitionerFhirAccount(resource_type, data, msgJson);
      }
    });
  }

  private async createUserFromERPNext(resource_id: string, data: any, resource_type?: string) {
    logger.info('Running RabbitMqService.createUserFromERPNext');
    console.log(resource_id);
    console.log(data);
    if (resource_id && data) {
      try {
        return await this.userService.create({
          resource_id,
          resource_type,
          ...data,
        });
      } catch (e: any) {

        const rmqPubMsg = this.rabbitMqSetup.structureErrorData(e.message, resource_type);
        return this.rmqPublish(JSON.stringify(rmqPubMsg));
      }
    }
  }

  private async updateExistingUser(email: string, data: any) {
    logger.info('Running RabbitMqService.updateExistingUser');
    if (email && !_.isEmpty(data)) {
      const { first_name, last_name, password, gender } = data;
      const dataToUpdate: any = {};

      if (gender) dataToUpdate.gender = gender?.toLowerCase();
      if (last_name) dataToUpdate.last_name = last_name;
      if (first_name) dataToUpdate.first_name = first_name;
      if (password) dataToUpdate.password = Password.hash(password);

      const existingUser = await this.userService.findOne({ email });

      if (existingUser) {
        await this.userService.update(existingUser?.id!, dataToUpdate);
      }
    }
  }

  private async createPatientOrPractitionerFhirAccount(resource_type: string, data: any, msgJson: any) {
    logger.info('Running RabbitMqService.createPatientOrPractitionerFhirAccount');
    if (resource_type && !_.isEmpty(data)) {
      let resource: IPatient | IPractitioner | any = {};

      if (resource_type?.toLowerCase() === forWho.patient) {
        try {
          resource = await this.patientService.create(data);
        } catch (e: any) {
          logger.error('Error creating patient from App.Lafia:', e);

          const rmqPubMsg = this.rabbitMqSetup.structureErrorData(e.message, resource_type);
          return this.rmqPublish(JSON.stringify(rmqPubMsg));
        }
      }

      if (resource_type?.toLowerCase() === forWho.practitioner) {
        try {
          resource = await this.practitionerService.create(data);
        } catch (e: any) {
          logger.error('Error creating practitioner from App.Lafia:', e);

          const rmqPubMsg = this.rabbitMqSetup.structureErrorData(e.message, resource_type);
          return this.rmqPublish(JSON.stringify(rmqPubMsg));
        }
      }

      const rmqPubMsg = this.rabbitMqSetup.structureSuccessData(successResponseType.default, msgJson, 'Resource created successfully', resource?.user?.id);
      await this.rmqPublish(JSON.stringify(rmqPubMsg));
    } else {
      const rmqPubMsg = this.rabbitMqSetup.structureErrorData('Unable to create resource: resource_type and data fields are required!');
      await this.rmqPublish(JSON.stringify(rmqPubMsg));
    }
  }

  public handleEvents(): void {
    // forwards all events to rabbit mq for app.lafia to handle
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
