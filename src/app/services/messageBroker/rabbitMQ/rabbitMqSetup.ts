import amqp, { Connection } from 'amqplib/callback_api';
import { injectable } from 'inversify';
import { Env } from '../../../config/env';
import { HttpStatusCode, logger } from '../../../utils';
import { BroadcastData } from '../../notifications';

const env = Env.all();

@injectable()
export class RabbitMqSetup {
  public async initRMQ(): Promise<amqp.Channel> {
    logger.info('Running RabbitMqSetup.initRMQ');

    const connectionURL = env.rmq_connection;

    return new Promise((resolve, reject) => {
      amqp.connect(connectionURL, (err: any, connection: Connection) => {
        if (err) {
          return reject({
            code: HttpStatusCode.INTERNAL_SERVER_ERROR,
            message: `Connection to RabbitMQ failed: ${err.message}`
          });
        }

        if (!connection) {
          return reject({
            code: HttpStatusCode.INTERNAL_SERVER_ERROR,
            message: `Connection to RabbitMQ failed`
          });
        }

        try {
          // Create a channel
          connection.createChannel((err, channel) => {
            if (err) {
              return reject({
                code: HttpStatusCode.INTERNAL_SERVER_ERROR,
                message: `RabbitMQ not able to create channel: ${err.message}`
              });
            }

            if (!channel) {
              return reject({
                code: HttpStatusCode.INTERNAL_SERVER_ERROR,
                message: `RabbitMQ not able to create channel`
              });
            }

            // Return the connection and channel
            return resolve(channel);
          });
        } catch (e: any) {
          return reject({
            code: e.code || HttpStatusCode.INTERNAL_SERVER_ERROR,
            message: e.message
          });
        }
      });
    });
  }

  public structureSuccessData(
    responseType: string,
    receivedData: IRmqReceivedMessage | BroadcastData,
    message: string,
    id?: string
  ): IRmqMessageResponse | any {
    logger.info('Running RabbitMqSetup.structureSuccessData');

    if (responseType === successResponseType.default) {
      const { resource_type, data } = receivedData as IRmqReceivedMessage;
      return {
        status: 'success',
        message,
        id,
        resource_type,
        ...data,
      };
    }

    if (responseType === successResponseType.fhir) {
      return {
        status: 'success',
        message,
        id,
        ...receivedData,
      };
    }

    if (responseType === successResponseType.broadcast) {
      return {
        status: 'success',
        message,
        ...receivedData,
      };
    }

  }

  public structureErrorData(message: string, resource_type = undefined): IRmqMessageResponse {
    logger.info('Running RabbitMqSetup.structureErrorData');

    return {
      status: 'error',
      message,
      id: null,
      resource_type,
    };
  }
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

export const successResponseType = {
  fhir: 'fhir',
  broadcast: 'broadcast',
  default: 'default',
}

