import Kafka, { HighLevelProducer, KafkaConsumer, ProducerGlobalConfig } from 'node-rdkafka';
import { logger } from '../../utils';

export class KafkaSetup {
  private static kafkaProducerGlobalConfig = {
    "client.id": 'kafka',
    'metadata.broker.list': 'localhost:9092',
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

  private static kafkaConsumerGlobalConfig = {
    "group.id": 'kafka',
    'metadata.broker.list': 'localhost:9092',
    "allow.auto.create.topics": true,
    'consume.callback.max.messages': 10
  };

  public static instantiateKafkaProducer(): HighLevelProducer {
    logger.info('Running KafkaSetup.instantiateKafkaProducer');

    return new HighLevelProducer(KafkaSetup.kafkaProducerGlobalConfig as ProducerGlobalConfig);
  }

  public static instantiateKafkaConsumer() {
    logger.info('Running KafkaSetup.instantiateKafkaConsumer');

    return new KafkaConsumer(KafkaSetup.kafkaConsumerGlobalConfig,{"auto.offset.reset": 'latest'});
  }

  public static structureSuccessData(
    responseType: string,
    receivedData: IRmqReceivedMessage,
    message: string,
    id?: string
  ): IRmqMessageResponse| any {
    logger.info('Running KafkaSetup.structureSuccessData');

    if (responseType === successResponseType.default) {
      const { resource_type, data } = receivedData;
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

  public static structureErrorData(message: string, resource_type = undefined): IRmqMessageResponse {
    logger.info('Running KafkaSetup.structureErrorData');

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
