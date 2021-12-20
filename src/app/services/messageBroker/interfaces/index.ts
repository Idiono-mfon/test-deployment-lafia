import amqp from 'amqplib/callback_api';
import { BroadcastData } from '../../notifications';

export interface IRabbitMqService {
  handleEvents(): void;

  rmqSubscribe(): Promise<void>;

  rmqPublish(msg: any): Promise<void>;
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

export interface InitRabbitMqConnection {
  connection: amqp.Connection;
  channel: amqp.Channel;
}

export interface IRabbitMqSetup {
  initRMQ(): Promise<InitRabbitMqConnection>;

  structureErrorData(message: string, resource_type?: string): IRmqMessageResponse

  structureSuccessData(responseType: string, receivedData: IRmqReceivedMessage | BroadcastData, message: string, id?: string): IRmqMessageResponse | any;
}
