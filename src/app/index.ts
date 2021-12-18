import 'reflect-metadata';
import { config as dotConfig } from 'dotenv';
import { Env } from './config/env';
import container from './config/inversify.config';
import TYPES from './config/types';
import { appServer } from './server';
import {
  FileService,
  IFirebaseService,
  IPatientService,
  IPractitionerService,
  RabbitMqService, SignallingServerService,
  VideoBroadcastService
} from './services';
import { logger } from './utils';

dotConfig();

class Server {
  private readonly fileService: FileService;
  private readonly patientService: IPatientService;
  private readonly rabbitMqService: RabbitMqService;
  // private readonly kafkaService: KafkaService;
  private readonly firebaseService: IFirebaseService;
  private readonly practitionerService: IPractitionerService;
  private readonly videoBroadcastService: VideoBroadcastService;
  private readonly signallingServerService: SignallingServerService;

  constructor() {
    this.fileService = container.get<FileService>(TYPES.FileService);
    // this.kafkaService = container.get<KafkaService>(TYPES.KafkaService);
    this.patientService = container.get<IPatientService>(TYPES.PatientService);
    this.rabbitMqService = container.get<RabbitMqService>(TYPES.RabbitMqService);
    this.firebaseService = container.get<IFirebaseService>(TYPES.FirebaseService);
    this.practitionerService = container.get<IPractitionerService>(TYPES.PractitionerService);
    this.videoBroadcastService = container.get<VideoBroadcastService>(TYPES.VideoBroadcastService);
    this.signallingServerService = container.get<SignallingServerService>(TYPES.SignallingServerService);


    this.mountServices().then(() => { /**/ });
  }


  private async mountServices() {
    logger.info('Running Server.mountServices');

    // Delete local encounter files that have been uploaded to S3
    this.fileService.onLocalFileDelete();

    // Send Firebase notification to patient
    await this.firebaseService.triggerNotification();

    // Message broker subscription and events
    // this.kafkaService.consumer();
    // this.kafkaService.handleEvents();
    await this.rabbitMqService.rmqSubscribe();
    this.rabbitMqService.handleEvents();

    // Signalling server
    this.signallingServerService.initialize(appServer);
  }


  public start() {
    logger.info('Running Server.start');

    const PORT = Env.all().port;

    if (!module.parent) {
      appServer.listen(PORT, () => {
        logger.info(`Listening on port: ${PORT}`);
        logger.info('');
      });
    }
  }
}

new Server().start();
