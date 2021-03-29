import cors from 'cors';
import { config as dotConfig } from 'dotenv';
import express from 'express';
import container from './config/inversify.config';
import { InversifyExpressServer } from 'inversify-express-utils';
import { Env } from './config/env';

dotConfig();

const app = express();
const server = new InversifyExpressServer(container, null, null, app);

server.setConfig((app) => {
  app.use(express.json());
  app.use(cors());
});

const serverInstance = server.build();
const PORT = Env.all().port;

if (process.env.NODE_ENV !== 'test') {
  serverInstance.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
  });
}

export { app };
