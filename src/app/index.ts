import 'reflect-metadata';
import cors from 'cors';
import { config as dotConfig } from 'dotenv';
import express from 'express';
import { createServer } from 'http';
import * as https from 'https';
import OAuth2Strategy from 'passport-oauth2';
import passport from 'passport';
import container from './config/inversify.config';
import { InversifyExpressServer } from 'inversify-express-utils';
import { Env } from './config/env';
import TYPES from './config/types';
import { AuthMiddleware } from './middlewares';
import { PatientService, PractitionerService, MessageBroker, VideoBroadcastService } from './services';
import { SignallingServerService } from './services/signallingServers';
import * as swaggerUi from 'swagger-ui-express';
import swaggerDocument from './config/swagger.config';
// @ts-ignore
import { Strategy as RefreshTokenStrategy } from 'passport-refresh-token';

const httpsAgent = new https.Agent({
  rejectUnauthorized: false,
});

dotConfig();

const env = Env.all();
const app = express();

const server = new InversifyExpressServer(container, null, null, app);
const messageBroker = container.get<MessageBroker>(TYPES.MessageBroker);
const patientService = container.get<PatientService>(TYPES.PatientService);
const videoBroadcastService = container.get<VideoBroadcastService>(TYPES.VideoBroadcastService);
const practitionerService = container.get<PractitionerService>(TYPES.PractitionerService);
const authMiddleware = container.get<AuthMiddleware>(TYPES.AuthMiddleware);

server.setConfig((app) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cors());
  app.use(passport.initialize());
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, {
    customfavIcon: 'https://lafia.io/wp-content/uploads/2021/02/lafia_logo_small.png',
    customSiteTitle: 'lafia.io api docs'
  }));
  app.use(authMiddleware.parseThirdPartyConnection);

  const strategy = new OAuth2Strategy({
      authorizationURL: env.safhir_authorization_url,
      tokenURL: env.safhir_token_url,
      clientID: env.safhir_client_id,
      clientSecret: env.safhir_client_secret,
      callbackURL: env.safhir_callback_url,
      scope: env.safhir_scope,
    },
    (accessToken: string, refreshToken: string, profile: any, cb: any) => {
      // @ts-ignore
      global.accessToken = accessToken;
      // @ts-ignore
      global.refreshToken = refreshToken;

      return cb(null, {
        accessToken,
        refreshToken,
      });
    }
  );

  // @ts-ignore
  strategy._oauth2.setAgent(httpsAgent);

  passport.use(strategy);

  passport.use(new RefreshTokenStrategy(
    (token: any, done: any) => done(null, token)
  ));

  passport.serializeUser((user, done) => done(null, user));

  passport.deserializeUser((obj: any, done) => done(null, obj));
});

messageBroker.rmqSubscribe().then().catch(e => console.log('rmq=>', e));
const serverInstance = server.build();
const PORT = Env.all().port;

const appServer = createServer(serverInstance);

appServer.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});

const signallingServer = new SignallingServerService(
  appServer,
  patientService,
  practitionerService,
  videoBroadcastService,
  messageBroker
);
signallingServer.initialize();

export { app, passport };
