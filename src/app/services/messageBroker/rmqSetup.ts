import amqp, { Connection } from 'amqplib/callback_api';
import { Env } from '../../config/env';

const env = Env.all();

export function initRMQ(): Promise<amqp.Channel> {
  const connectionURL = env.rmq_connection;

  return new Promise((resolve, reject) => {
    amqp.connect(connectionURL, (err, connection: Connection) => {
      if (err) {
        reject(err.message || 'Connection to RabbitMQ failed!');
      }

      try {
        // Create a channel
        connection.createChannel((err, channel) => {
          if (err) {
            reject(err.message || 'RabbitMQ not able to create channel!');
          }

          // Return the connection and channel
          resolve(channel);
        });
      } catch(e) {
        console.log('Could not create a channel!');
        reject(e.message);
      }
    });
  });
}
