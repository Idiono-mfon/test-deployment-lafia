import { inject, injectable } from 'inversify';
import _ from 'lodash';
import { Env } from '../../config/env';
import TYPES from '../../config/types';
import { IPatient, IPractitioner } from '../../models';
import { forWho } from '../../utils';
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
    try {
      const rmqChannel = await initRMQ();

      rmqChannel.assertQueue(this.pubQueue, { durable: false });
      rmqChannel.sendToQueue(this.pubQueue, Buffer.from(msg));

      console.log(' [x] Sent Date: %s', new Date().toString());
      console.log(' [x] Sent Data: %s', msg);
    } catch (e) {
      console.log(e);
    }
  }

  public async rmqSubscribe() {
    let rmqChannel: any;

    try {
      rmqChannel = await initRMQ();
    } catch (e) {
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
        } catch (e) {
          const rmqPubMsg = rmqErrorResponse('The payload is not a valid JSON. Did you remember to stringify it?');
          await this.rmqPublish(JSON.stringify(rmqPubMsg));

          return;
        }

        console.log(' [x] Received Date: %s', new Date().toString());
        console.log(' [x] Received Data: %s', msgString);

        const { data, resource_type, resource_id } = msgJson;

        if (resource_id && data) {
          await this.userService.createUser({
            resource_id,
            ...data,
          });

          return;
        }

        if (resource_type && !_.isEmpty(data)) {
          let resource: IPatient | IPractitioner | any = {};

          if (resource_type?.toLowerCase() === forWho.patient) {
            try {
              resource = await this.patientService.createPatient(data);
            } catch (e) {
              const rmqPubMsg = rmqErrorResponse(e.message, resource_type);
              await this.rmqPublish(JSON.stringify(rmqPubMsg));

              return;
            }
          }

          if (resource_type?.toLowerCase() === forWho.practitioner) {
            try {
              resource = await this.practitionerService.createPractitioner(data);
            } catch (e) {
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
  return {
    status: 'error',
    message,
    id: null,
    resource_type,
  };
}

export function rmqSuccessResponse(receivedData: IRmqReceivedMessage, id: string, message: string): IRmqMessageResponse {
  const { resource_type, data } = receivedData;
  return {
    status: 'success',
    message,
    id,
    resource_type,
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
