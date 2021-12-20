import 'reflect-metadata';
import { config as dotConfig } from 'dotenv';
import { Env } from './config/env';
import { container } from './config';
import TYPES from './config/types';
import { appServer } from './server';
import {
  IFileService,
  IFirebaseService,
  IRabbitMqService,
  SignallingServerService
} from './services';
import { logger } from './utils';

dotConfig();

class Server {
  private readonly fileService: IFileService;
  private readonly rabbitMqService: IRabbitMqService;
  private readonly firebaseService: IFirebaseService;
  private readonly signallingServerService: SignallingServerService;

  constructor() {
    this.fileService = container.get<IFileService>(TYPES.FileService);
    this.rabbitMqService = container.get<IRabbitMqService>(TYPES.RabbitMqService);
    this.firebaseService = container.get<IFirebaseService>(TYPES.FirebaseService);
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
        logger.info('');
        logger.info('===========================');
        logger.info(`  Listening on port: ${PORT}`);
        logger.info('===========================');
        logger.info('');
      });
    }
  }
}

new Server().start();
