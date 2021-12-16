import 'reflect-metadata';
import { config as dotConfig } from 'dotenv';
import { createServer } from 'http';
import { InversifyExpressServer } from 'inversify-express-utils';
import passport from 'passport';
import refreshOauth2Token from 'passport-oauth2-refresh';
import { App } from './app';
import { Env } from './config/env';
import container from './config/inversify.config';
import TYPES from './config/types';
import {
  FileService,
  FirebaseService,
  PatientService,
  PractitionerService, RabbitMqService,
  SignallingServerService,
  VideoBroadcastService,
} from './services';
import { logger } from './utils';

dotConfig();

// eslint-disable-next-line @typescript-eslint/unbound-method
const { getExpressApp, mountMiddlewares } = new App();

// @ts-ignore
const server = new InversifyExpressServer(container, null, null, getExpressApp());
const patientService = container.get<PatientService>(TYPES.PatientService);
const videoBroadcastService = container.get<VideoBroadcastService>(TYPES.VideoBroadcastService);
const practitionerService = container.get<PractitionerService>(TYPES.PractitionerService);
// const kafkaService = container.get<KafkaService>(TYPES.KafkaService);
const fileService = container.get<FileService>(TYPES.FileService);
const rabbitMqService = container.get<RabbitMqService>(TYPES.RabbitMqService);

// const saFhirStrategy = authService.getStrategy('safhir');

server.setConfig((app) => {

  mountMiddlewares(app);

});

// Delete local encounter files that has been uploaded to S3
fileService.onLocalFileDelete();

// Send Firebase call notification to patient
new FirebaseService().triggerNotification().then(response => logger.info(response));

// kafkaService.consumer();
// kafkaService.handleEvents();
rabbitMqService.rmqSubscribe().then();
rabbitMqService.handleEvents();

const serverInstance = server.build();
const PORT = Env.all().port;

const appServer = createServer(serverInstance);

if (!module.parent) {
  appServer.listen(PORT, () => {
    logger.info(`Listening on port: ${PORT}`);
    logger.info('');
  });
}

const signallingServer = new SignallingServerService(
  appServer,
  patientService,
  practitionerService,
  videoBroadcastService
);
signallingServer.initialize();

export { appServer, passport, refreshOauth2Token, container };
