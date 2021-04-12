import { inject, injectable } from 'inversify';
import _ from 'lodash';
import { Env } from '../../config/env';
import TYPES from '../../config/types';
import { IPatient } from '../../models/patients';
import { error, GenericResponseError, throwError } from '../../utils';
import { PatientService } from '../patients';
import { initRMQ } from './rmqSetup';

const env = Env.all();

@injectable()
export class MessageBroker {
  @inject(TYPES.PatientService)
  private readonly patientService: PatientService;
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
          const msgJson = JSON.parse(msgString);

          console.log(' [x] Received Date: %s', new Date().toString());
          console.log(' [x] Received Data: %s', msgString);

          const { data } = msgJson;

          if (data || !_.isEmpty(data)) {
            const patient: IPatient = await this.patientService.createPatient(data);

            const rmqPubMsg = {
              status: 'success',
              data: patient?.id,
            }
            await this.rmqPublish(JSON.stringify(rmqPubMsg));
          } else {
            throwError('Invalid payload received', error.badRequest);
          }
        }
      });
    } catch (e) {
      const subError = {
        status: 'error',
        data: e.message,
      }
      await this.rmqPublish(subError);
    }
  }
}
