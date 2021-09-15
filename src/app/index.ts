import 'reflect-metadata';
import cors from 'cors';
import { config as dotConfig } from 'dotenv';
import express, { Request, Response } from 'express';
import { createServer } from 'http';
import * as https from 'https';
import OAuth2Strategy from 'passport-oauth2';
import passport from 'passport';
import container from './config/inversify.config';
import { InversifyExpressServer } from 'inversify-express-utils';
import { Env } from './config/env';
import TYPES from './config/types';
import { PatientService, PractitionerService, MessageBroker, VideoBroadcastService } from './services';
import { SignallingServerService } from './services/signallingServers';
import * as swaggerUi from 'swagger-ui-express';
import swaggerDocument from './config/swagger.config';

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

server.setConfig((app) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cors());
  app.use(passport.initialize());
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, {
    customfavIcon: 'https://lafia.io/wp-content/uploads/2021/02/lafia_logo_small.png',
    customSiteTitle: 'lafia.io api docs'
  }));

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

  passport.serializeUser((user, done) => done(null, user));

  passport.deserializeUser((obj: any, done) => done(null, obj));

  app.get('/auth/safhir', (req: Request, res: Response) => {
    const state = req.query.state as string;

    if (!state) {
      return res.status(400).send({
        status: 'error',
        message: 'state is a required param which should hold the patient id',
      });
    }

    passport.authenticate('oauth2',
      {
        state: req.query.state as string
      })(req, res);
  });

  app.get('/safhir',
    passport.authenticate('oauth2'),
    (req, res) => {

      // @ts-ignore
      const redirectURL = `https://app.lafia.io/safhir?state=${req.query.state}&accessToken=${global.accessToken}`;

      res.redirect(redirectURL);
    }
  );
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

export { app };
