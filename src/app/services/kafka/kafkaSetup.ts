import { injectable } from 'inversify';
import { HighLevelProducer, KafkaConsumer, ProducerGlobalConfig } from 'node-rdkafka';
import { Env } from '../../config/env';
import { logger } from '../../utils';
import { BroadcastData } from '../notifications';

const env = Env.all();

@injectable()
export class KafkaSetup {
  private readonly globalConfig = {
    'security.protocol': 'plaintext',
    'client.id': 'lafia-service',
    'bootstrap.servers': env.kafka_connection,
    'session.timeout.ms': 6000,
  }
  private readonly kafkaProducerGlobalConfig = {
    ...this.globalConfig,
    'compression.type': 'gzip',
    'retry.backoff.ms': 200,
    'message.send.max.retries': 10,
    'socket.keepalive.enable': true,
    'queue.buffering.max.messages': 100000,
    'queue.buffering.max.ms': 1000,
    'batch.num.messages': 1000000,
    'dr_msg_cb': true,
    'request.required.acks': 1
  };

  private readonly kafkaConsumerGlobalConfig = {
    ...this.globalConfig,
    'group.id': 'kafka',
    'allow.auto.create.topics': true,
    'consume.callback.max.messages': 10,
    'fetch.min.bytes': 1,
    'fetch.wait.max.ms': 350
  };

  public instantiateKafkaProducer(): HighLevelProducer {
    logger.info('Running KafkaSetup.instantiateKafkaProducer');

    return new HighLevelProducer(this.kafkaProducerGlobalConfig as ProducerGlobalConfig);
  }

  public instantiateKafkaConsumer() {
    logger.info('Running KafkaSetup.instantiateKafkaConsumer');

    // @ts-ignore
    return new KafkaConsumer(this.kafkaConsumerGlobalConfig, { 'auto.offset.reset': 'earliest' });
  }

  public structureSuccessData(
    responseType: string,
    receivedData: IKafkaReceivedMessage | BroadcastData,
    message: string,
    id?: string
  ): IKafkaMessageResponse | any {
    logger.info('Running KafkaSetup.structureSuccessData');

    if (responseType === successResponseType.default) {
      const { resource_type, data } = receivedData as IKafkaReceivedMessage;
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

  public structureErrorData(message: string, resource_type = undefined): IKafkaMessageResponse {
    logger.info('Running KafkaSetup.structureErrorData');

    return {
      status: 'error',
      message,
      id: null,
      resource_type,
    };
  }
}

export interface IKafkaReceivedMessage {
  resource_type: string;
  data: IKafkaMessageData;
}

export interface IKafkaMessageData {
  first_name?: string;
  last_name?: string;
  email?: string;
  password?: string;
  gender?: string;
}

export interface IKafkaMessageResponse extends IKafkaMessageData {
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
