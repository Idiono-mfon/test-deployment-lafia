import amqp, { Connection } from 'amqplib/callback_api';
import { Env } from '../../config/env';
import { HttpStatusCode } from '../../utils';

const env = Env.all();

export function initRMQ(): Promise<amqp.Channel> {
  const connectionURL = env.rmq_connection;

  return new Promise((resolve, reject) => {
    amqp.connect(connectionURL, (err, connection: Connection) => {
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
      } catch(e: any) {
        return reject({
          code: e.code || HttpStatusCode.INTERNAL_SERVER_ERROR,
          message: e.message
        });
      }
    });
  });
}
