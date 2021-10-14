import { inject, injectable } from 'inversify';
import _ from 'lodash';
import { Env } from '../../config/env';
import TYPES from '../../config/types';
import { IPatient, IPractitioner } from '../../models';
import { forWho, logger } from '../../utils';
import { Password } from '../../utils/password';
import { PatientService } from '../patients';
import { PractitionerService } from '../practitioners';
import { UserService } from '../users';
import { initRMQ } from './rmqSetup';

const env = Env.all();

@injectable()
export class MessageBroker {
  @inject(TYPES.PatientService)
  private readonly patientService: PatientService;
  @inject(TYPES.PractitionerService)
  private readonly practitionerService: PractitionerService;
  @inject(TYPES.UserService)
  private readonly userService: UserService;

  private readonly pubQueue: string;
  private readonly subQueue: string;

  constructor() {
    this.pubQueue = env.rmq_pub_queue;
    this.subQueue = env.rmq_sub_queue;
  }

  public async rmqPublish(msg: any) {
    logger.info('Running MessageBroker.rmqPublish');
    try {
      const rmqChannel = await initRMQ();

      rmqChannel.assertQueue(this.pubQueue, { durable: false });
      rmqChannel.sendToQueue(this.pubQueue, Buffer.from(msg));

      logger.info(`[x] Sent Data: ${msg}`);
    } catch (e: any) {
      console.log(e);
    }
  }

  public async rmqSubscribe() {
    logger.info('Running MessageBroker.rmqSubscribe');
    let rmqChannel: any;

    try {
      rmqChannel = await initRMQ();
    } catch (e: any) {
      const rmqPubMsg = rmqErrorResponse(e.message);
      await this.rmqPublish(JSON.stringify(rmqPubMsg));

      return;
    }

    if (!rmqChannel) {
      const rmqPubMsg = rmqErrorResponse('RabbitMQ unable to create channel');
      await this.rmqPublish(JSON.stringify(rmqPubMsg));

      return;
    }

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
          const rmqPubMsg = rmqErrorResponse('The payload is not a valid JSON. Did you remember to stringify it?');
          await this.rmqPublish(JSON.stringify(rmqPubMsg));

          return;
        }

        logger.info(`[x] Received Data: ${msgString}`);

        const { data, resource_type, resource_id, email } = msgJson;

        if (resource_id && data) {
          try {
            await this.userService.createUser({
              resource_id,
              resource_type,
              ...data,
            });

            return;
          } catch (e: any) {
            const rmqPubMsg = rmqErrorResponse(e.message, resource_type);
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
              const rmqPubMsg = rmqErrorResponse(e.message, resource_type);
              await this.rmqPublish(JSON.stringify(rmqPubMsg));

              return;
            }
          }

          if (resource_type?.toLowerCase() === forWho.practitioner) {
            try {
              resource = await this.practitionerService.createPractitioner(data);
            } catch (e: any) {
              const rmqPubMsg = rmqErrorResponse(e.message, resource_type);
              await this.rmqPublish(JSON.stringify(rmqPubMsg));

              return;
            }
          }

          const rmqPubMsg = rmqSuccessResponse(msgJson, resource?.user?.id, 'Resource created successfully');
          await this.rmqPublish(JSON.stringify(rmqPubMsg));
        } else {
          const rmqPubMsg = rmqErrorResponse('Unable to create resource: resource_type and data fields are required!');
          await this.rmqPublish(JSON.stringify(rmqPubMsg));
        }
      }
    });
  }
}

export function rmqErrorResponse(message: string, resource_type = undefined): IRmqMessageResponse {
  logger.info('Running MessageBroker.rmqErrorResponse');
  return {
    status: 'error',
    message,
    id: null,
    resource_type,
  };
}

export function rmqSuccessResponse(receivedData: IRmqReceivedMessage, id: string, message: string): IRmqMessageResponse {
  logger.info('Running MessageBroker.rmqSuccessResponse');
  const { resource_type, data } = receivedData;
  return {
    status: 'success',
    message,
    id,
    resource_type,
    ...data,
  };
}

export function rmqFhirSuccessResponse(receivedData: IRmqReceivedMessage, id: string, message: string) {
  logger.info('Running MessageBroker.rmqFhirSuccessResponse');
  return {
    status: 'success',
    message,
    id,
    ...receivedData,
  };
}

export function rmqNewBroadcastSuccessResponse(data: any, message: string) {
  logger.info('Running MessageBroker.rmqNewBroadcastSuccessResponse');
  return {
    status: 'success',
    message,
    ...data,
  };
}

export interface IRmqReceivedMessage {
  resource_type: string;
  data: IRmqMessageData;
}

export interface IRmqMessageData {
  first_name?: string;
  last_name?: string;
  email?: string;
  password?: string;
  gender?: string;
}

export interface IRmqMessageResponse extends IRmqMessageData {
  status: string;
  message: string;
  resource_type?: string;
  id?: string | null;

}
