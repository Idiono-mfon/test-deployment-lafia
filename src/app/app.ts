import cors from 'cors';
import express, { Application } from 'express';
import { ContainerModule, inject, injectable } from 'inversify';
import OAuth2Strategy from 'passport-oauth2';
import refreshOauth2Token from 'passport-oauth2-refresh';
import * as swaggerUi from 'swagger-ui-express';
import swaggerDocument from './config/swagger.config';
import TYPES from './config/types';
import { AuthMiddleware, morganMiddleware, passport } from './middlewares';
import { AuthService } from './services';
import { logger } from './utils';

@injectable()
export class App implements IApp {

  private app: Application;
  private saFhirStrategy: OAuth2Strategy;

  @inject(TYPES.AuthService)
  private readonly authService: AuthService;
  @inject(TYPES.AuthMiddleware)
  private readonly authMiddleware: AuthMiddleware;

  public getExpressApp(): Application {
    logger.info('Running App.getExpressApp');

    if (!this.app) {
      this.app = express();
    }

    return this.app;
  }

  public mountMiddlewares(app: Application): void {
    logger.info('Running App.mountMiddlewares');

    this.saFhirStrategy = this.authService.getStrategy('safhir');

    app.use(express.json({ limit: '250mb' }));
    app.use(express.urlencoded({ limit: '250mb', extended: true, parameterLimit: 50000 }));
    app.use(cors());
    app.use(morganMiddleware);
    app.use(passport.initialize());
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, {
      customfavIcon: 'https://lafia.io/wp-content/uploads/2021/02/lafia_logo_small.png',
      customSiteTitle: 'lafia.io api docs'
    }));
    // eslint-disable-next-line @typescript-eslint/unbound-method
    app.use(this.authMiddleware.parseThirdPartyConnection);

    passport.use(this.saFhirStrategy);

    const httpAgent = this.authService.getHttpsAgent();

    refreshOauth2Token.use(this.saFhirStrategy, {
      // @ts-ignore
      setRefreshOAuth2({ strategyOAuth2, refreshOAuth2 }) {
        // These named parameters are set for most strategies.
        // The `refreshOAuth2` instance is a clone of the one supplied by the strategy, inheriting most of its config.
        // Customise it here and return if necessary.
        // For example, to set a proxy:
        refreshOAuth2.setAgent(httpAgent);
        return refreshOAuth2;
      },
    });

    passport.serializeUser((user, done) => done(null, user));

    passport.deserializeUser((obj: any, done) => done(null, obj));
  }

}

export const appModule = new ContainerModule((bind) => {
  bind<IApp>(TYPES.App).to(App);
});

export interface IApp {
  getExpressApp(): Application;

  mountMiddlewares(app: Application): void;
}

export { refreshOauth2Token };
