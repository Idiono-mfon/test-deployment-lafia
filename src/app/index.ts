import cors from 'cors';
import { config as dotConfig } from 'dotenv';
import express from 'express';
import container from './config/inversify.config';
import { InversifyExpressServer } from 'inversify-express-utils';
import { Env } from './config/env';
import TYPES from './config/types';
import { MessageBroker } from './services/messageBroker';

dotConfig();

const app = express();
const server = new InversifyExpressServer(container, null, null, app);
const messageBroker = container.get<MessageBroker>(TYPES.MessageBroker);

server.setConfig((app) => {
  app.use(express.json());
  app.use(cors());
});

const serverInstance = server.build();
const PORT = Env.all().port;

messageBroker.rmqSubscribe().then();

if (process.env.NODE_ENV !== 'test') {
  serverInstance.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
  });
}

export { app };
