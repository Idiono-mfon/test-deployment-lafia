import cors from 'cors';
import { config as dotConfig } from 'dotenv';
import express from 'express';
import { createServer } from 'http';
import container from './config/inversify.config';
import { InversifyExpressServer } from 'inversify-express-utils';
import { Env } from './config/env';
import TYPES from './config/types';
import { MessageBroker } from './services/messageBroker';
import { SignallingServerService } from './services/signallingServers';

dotConfig();

const app = express();
const server = new InversifyExpressServer(container, null, null, app);
const messageBroker = container.get<MessageBroker>(TYPES.MessageBroker);

server.setConfig((app) => {
  app.use(express.json());
  app.use(cors());
});

messageBroker.rmqSubscribe().then();
const serverInstance = server.build();
const PORT = Env.all().port;

const appServer = createServer(serverInstance);

appServer.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});

const signallingServer  = new SignallingServerService(appServer);
signallingServer.initialize();

export { app };
