import { inject, injectable } from 'inversify';
import _ from 'lodash';
import { Env } from '../../config/env';
import TYPES from '../../config/types';
import { IPatient } from '../../models/patients';
import { IPractitioner } from '../../models/practitioners';
import { PatientService } from '../patients';
import { PractitionerService } from '../practitioners';
import { initRMQ } from './rmqSetup';

const env = Env.all();

@injectable()
export class MessageBroker {
  @inject(TYPES.PatientService)
  private readonly patientService: PatientService;
  @inject(TYPES.PractitionerService)
  private readonly practitionerService: PractitionerService;
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
      console.log('error:', e.message);
    }
  }

  public async rmqSubscribe() {
    try {
      const rmqChannel = await initRMQ();

      rmqChannel.assertQueue(this.subQueue, { durable: false });
      rmqChannel.consume(this.subQueue, async msg => {
        if (msg) {
          // Acknowledge the received message
          rmqChannel.ack(msg);

          const msgString = msg.content.toString();
          let msgJson: any = {};
          try {
            msgJson = JSON.parse(msgString);
          } catch (e) {
            const rmqPubMsg = {
              status: 'error',
              message: 'The payload is not a valid JSON. Did you remember to stringify it?',
              id: null
            }
            await this.rmqPublish(JSON.stringify(rmqPubMsg));

            return;
          }

          console.log(' [x] Received Date: %s', new Date().toString());
          console.log(' [x] Received Data: %s', msgString);

          const { data, resource_type } = msgJson;

          if (data || !_.isEmpty(data)) {
            let resource: IPatient | IPractitioner | any = {};

            if (!resource_type) {
              const rmqPubMsg = {
                status: 'error',
                resource_type,
                message: 'Unable to create resource: resource_type is required!',
                id: null
              }
              await this.rmqPublish(JSON.stringify(rmqPubMsg));

              return;
            }

            if (resource_type?.toLowerCase() === 'patient') {
              resource = await this.patientService.createPatient(data);
            }

            if (resource_type?.toLowerCase() === 'practitioner') {
              resource = await this.practitionerService.createPractitioner(data);
            }

            const rmqPubMsg = {
              status: 'success',
              resource_type,
              message: 'Resource created successfully',
              id: resource?.id
            }
            await this.rmqPublish(JSON.stringify(rmqPubMsg));
          } else {
            const rmqPubMsg = {
              status: 'error',
              resource_type,
              message: 'Unable to create resource',
              id: null
            }
            await this.rmqPublish(JSON.stringify(rmqPubMsg));
          }
        }
      });
    } catch (e) {
      const subError = {
        status: 'error',
        message: e.message,
        id: null
      }
      await this.rmqPublish(subError);
    }
  }
}
