import 'reflect-metadata';
import cors from 'cors';
import { config as dotConfig } from 'dotenv';
import express from 'express';
import { createServer } from 'http';
import { interfaces } from 'inversify';
import passport from 'passport';
import refreshOauth2Token from 'passport-oauth2-refresh';
import container from './config/inversify.config';
import { InversifyExpressServer } from 'inversify-express-utils';
import { Env } from './config/env';
import TYPES from './config/types';
import { AuthMiddleware, morganMiddleware } from './middlewares';
import { PatientService, PractitionerService, MessageBroker, VideoBroadcastService, AuthService } from './services';
import { KafkaService } from './services/kafka';
import { SignallingServerService } from './services/signallingServers';
import * as swaggerUi from 'swagger-ui-express';
import swaggerDocument from './config/swagger.config';
import { logger } from './utils';

process.setMaxListeners(0);

KafkaService.producer('creatResource', {resourceType: 'Patient', data: {name: 'Name'}}).then(e => logger.info(e));

KafkaService
  .consumer()
  .then();

dotConfig();

const app = express();

// @ts-ignore
const server = new InversifyExpressServer(container as interfaces.Container, null, null, app);
const messageBroker = container.get<MessageBroker>(TYPES.MessageBroker);
const patientService = container.get<PatientService>(TYPES.PatientService);
const videoBroadcastService = container.get<VideoBroadcastService>(TYPES.VideoBroadcastService);
const practitionerService = container.get<PractitionerService>(TYPES.PractitionerService);
const authMiddleware = container.get<AuthMiddleware>(TYPES.AuthMiddleware);
const authService = container.get<AuthService>(TYPES.AuthService);

const saFhirStrategy = authService.getStrategy('safhir');

server.setConfig((app) => {
  app.use(express.json({limit: '50mb'}));
  app.use(express.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));
  app.use(cors());
  app.use(morganMiddleware);
  app.use(passport.initialize());
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, {
    customfavIcon: 'https://lafia.io/wp-content/uploads/2021/02/lafia_logo_small.png',
    customSiteTitle: 'lafia.io api docs'
  }));
  app.use(authMiddleware.parseThirdPartyConnection);

  passport.use(saFhirStrategy);
  refreshOauth2Token.use(saFhirStrategy, {
    // @ts-ignore
    setRefreshOAuth2({ strategyOAuth2, refreshOAuth2 }) {
      // These named parameters are set for most strategies.
      // The `refreshOAuth2` instance is a clone of the one supplied by the strategy, inheriting most of its config.
      // Customise it here and return if necessary.
      // For example, to set a proxy:
      refreshOAuth2.setAgent(authService.getHttpsAgent());
      return refreshOAuth2;
    },
  });

  passport.serializeUser((user, done) => done(null, user));

  passport.deserializeUser((obj: any, done) => done(null, obj));
});

messageBroker.rmqSubscribe().then().catch(e => console.log('rmq=>', e));
const serverInstance = server.build();
const PORT = Env.all().port;

const appServer = createServer(serverInstance);

appServer.listen(PORT, () => {
  logger.debug(`Listening on port: ${PORT}`);
  logger.debug('');
});

const signallingServer = new SignallingServerService(
  appServer,
  patientService,
  practitionerService,
  videoBroadcastService,
  messageBroker
);
signallingServer.initialize();

export { app, passport, refreshOauth2Token };
