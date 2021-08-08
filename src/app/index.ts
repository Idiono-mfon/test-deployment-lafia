import 'reflect-metadata';
import cors from 'cors';
import { config as dotConfig } from 'dotenv';
import express from 'express';
import { createServer } from 'http';
import container from './config/inversify.config';
import { InversifyExpressServer } from 'inversify-express-utils';
import { Env } from './config/env';
import TYPES from './config/types';
import { PatientService, PractitionerService, MessageBroker } from './services';
import { SignallingServerService } from './services/signallingServers';

dotConfig();

const app = express();
const server = new InversifyExpressServer(container, null, null, app);
const messageBroker = container.get<MessageBroker>(TYPES.MessageBroker);
const patientService = container.get<PatientService>(TYPES.PatientService);
const practitionerService = container.get<PractitionerService>(TYPES.PractitionerService);

server.setConfig((app) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cors());
});

messageBroker.rmqSubscribe().then();
const serverInstance = server.build();
const PORT = Env.all().port;

const appServer = createServer(serverInstance);

appServer.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});

const signallingServer  = new SignallingServerService(appServer, patientService, practitionerService);
signallingServer.initialize();

export { app };
