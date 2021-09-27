import 'reflect-metadata';
import cors from 'cors';
import { config as dotConfig } from 'dotenv';
import express from 'express';
import { createServer } from 'http';
import passport from 'passport';
import refreshOauth2Token from 'passport-oauth2-refresh';
import container from './config/inversify.config';
import { InversifyExpressServer } from 'inversify-express-utils';
import { Env } from './config/env';
import TYPES from './config/types';
import { AuthMiddleware } from './middlewares';
import { PatientService, PractitionerService, MessageBroker, VideoBroadcastService, AuthService } from './services';
import { SignallingServerService } from './services/signallingServers';
import * as swaggerUi from 'swagger-ui-express';
import swaggerDocument from './config/swagger.config';

dotConfig();

const app = express();

const server = new InversifyExpressServer(container, null, null, app);
const messageBroker = container.get<MessageBroker>(TYPES.MessageBroker);
const patientService = container.get<PatientService>(TYPES.PatientService);
const videoBroadcastService = container.get<VideoBroadcastService>(TYPES.VideoBroadcastService);
const practitionerService = container.get<PractitionerService>(TYPES.PractitionerService);
const authMiddleware = container.get<AuthMiddleware>(TYPES.AuthMiddleware);
const authService = container.get<AuthService>(TYPES.AuthService);

const saFhirStrategy = authService.getStrategy('safhir');

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

  passport.use(saFhirStrategy);
  refreshOauth2Token.use(saFhirStrategy, {
    // @ts-ignore
    setRefreshOAuth2({ strategyOAuth2, refreshOAuth2 }) {
      console.log(strategyOAuth2);
      // These named parameters are set for most strategies.
      // The `refreshOAuth2` instance is a clone of the one supplied by the strategy, inheriting most of its config.
      // Customise it here and return if necessary.
      // For example, to set a proxy:
      refreshOAuth2.setAgent(authService.getHttpsAgent());
      return refreshOAuth2;
    },
  });

  refreshOauth2Token.requestNewAccessToken(
    'oauth2',
    'eyJhbGciOiJSUzI1NiIsImtpZCI6IjU3MjA0RUQ4MEM0RDFCMkJCODA2MDg5MzM5MkFCMjIxMzZFNkVGNzQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL295c2ZkbWRodDMxdGVuYW50YjJjLmIyY2xvZ2luLmNvbS83ZWRlMmQwMS1mYjAyLTRhZDItYTVkYS1jMmZiMjU4NTI3YWYvdjIuMC8iLCJleHAiOjE2MzI0NDkwODgsIm5iZiI6MTYzMjQ0NTQ4OCwiYXVkIjoiNzQwYTUxYTctNGYwMi00MmIyLTg5ODctOTNjMTBjMDAxZTQ3IiwiZW1haWwiOiJ0ZXN0MzAwODFAZG1kLmNvbSIsIm5hbWUiOiJBbmdlbGlhIEFiZXJuYXRoeSIsImlkcCI6Imh0dHBzOi8vZGV2LTE0NjUzMjkub2t0YS5jb20vb2F1dGgyL2RlZmF1bHQiLCJzdWIiOiI0OTVmOWQxMy1jZjMwLTQ3MTEtYjM1YS04NDIxNGI5N2M5OWIiLCJNZW1iZXJJZCI6IjFiNDVjZTNiLWYxYjctNGVjMC1iNGFlLWQ3Yzk1YTFjY2RkMCIsImZoaXJVc2VyIjoiaHR0cHM6Ly9hcGktZG1kaC10MzEuc2FmaGlyLmlvL3YxL2FwaS9maGlyVXNlci9QYXRpZW50LzdjZjA3N2U4LTRlNTUtNDJkMC1hZTk1LTVlMjI1NTExYWI0MyIsInRpZCI6IjdlZGUyZDAxLWZiMDItNGFkMi1hNWRhLWMyZmIyNTg1MjdhZiIsInNjcCI6InBhdGllbnQvQWxsZXJneUludG9sZXJhbmNlLnJlYWQgcGF0aWVudC9DYXJlUGxhbi5yZWFkIHBhdGllbnQvQ2FyZVRlYW0ucmVhZCBwYXRpZW50L0NvbmRpdGlvbi5yZWFkIHBhdGllbnQvRGV2aWNlLnJlYWQgcGF0aWVudC9EaWFnbm9zdGljUmVwb3J0LnJlYWQgcGF0aWVudC9Eb2N1bWVudFJlZmVyZW5jZS5yZWFkIHBhdGllbnQvRW5jb3VudGVyLnJlYWQgcGF0aWVudC9Hb2FsLnJlYWQgcGF0aWVudC9JbW11bml6YXRpb24ucmVhZCBwYXRpZW50L0xvY2F0aW9uLnJlYWQgcGF0aWVudC9NZWRpY2F0aW9uLnJlYWQgcGF0aWVudC9NZWRpY2F0aW9uUmVxdWVzdC5yZWFkIHBhdGllbnQvT2JzZXJ2YXRpb24ucmVhZCBwYXRpZW50L09yZ2FuaXphdGlvbi5yZWFkIHBhdGllbnQvUGF0aWVudC5yZWFkIHBhdGllbnQvUHJhY3RpdGlvbmVyLnJlYWQgcGF0aWVudC9QcmFjdGl0aW9uZXJSb2xlLnJlYWQgcGF0aWVudC9Qcm9jZWR1cmUucmVhZCBwYXRpZW50L1Byb3ZlbmFuY2UucmVhZCBvcGVuaWQgb2ZmbGluZV9hY2Nlc3MgbGF1bmNoL3BhdGllbnQgZmhpclVzZXIiLCJhenAiOiJjMTMxN2E0Ni1hMDQ4LTQ0MDItYTE4MS0yMjIxZmFjNGZjOTkiLCJ2ZXIiOiIxLjAiLCJpYXQiOjE2MzI0NDU0ODh9.CK3voNxUjz7tic8rvb_3MmboQ2GN-rAHuPGFruVfsPN7m0qjCqemqwaukbx29el0clirfwM_QSwgvtBXaqYZszKuJBO30Jl2rdljk7qlRETJWz367afjN8rO1GPk4BFFu6aWfkaXefV95xflq9Cu-l-S1xL_OePwgUP00cHGu0Iwm8c6-HRBfqht8rJ_pmeENTWY33r1D2xN9Cx0O05dSyH2EyJOJu3hS-QBiMqX4piBmIampezq1znaoUMmhvIUtO9zEyc6RLdn64-U90ZMTxQg_CHnkpBFXbikpElhvWrtOE7nIQFcSeQb-vQG1-Yd4dDtR4RpEU-Rl3ygNTyAhg',
    (err: any, accessToken: string, refreshToken: string, result: any) => {

      // console.log({
      //   err: err.message,
      //   accessToken,
      //   refreshToken,
      //   result,
      // })

      return {
        err,
        accessToken,
        refreshToken,
        result,
      }
      // You have a new access token, store it in the user object,
      // or use it to make a new request.
      // `refreshToken` may or may not exist, depending on the strategy you are using.
      // You probably don't need it anyway, as according to the OAuth 2.0 spec,
      // it should be the same as the initial refresh token.
    },
  );

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
