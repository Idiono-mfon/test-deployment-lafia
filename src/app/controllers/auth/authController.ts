import { inject } from 'inversify';
import { Request, Response } from 'express';
import TYPES from '../../config/types';
import { passport } from '../../middlewares';
import { IAuthService } from '../../services';
import { BaseController } from '../baseController';
import { error, logger, throwError } from '../../utils';
import { controller, httpDelete, httpGet, httpPost, request, response } from 'inversify-express-utils';

@controller('')
export class AuthController extends BaseController {
  @inject(TYPES.AuthService)
  private authService: IAuthService;

  @httpPost('/auth/login')
  public async login(@request() req: Request, @response() res: Response): Promise<void> {
    logger.info('Running AuthController.login');

    try {
      // @ts-ignore
      const ip: string = req.headers['x-forwarded-for']?.split(',').shift() || req.socket?.remoteAddress;

      const { email, password } = req.body;
      const userData = await this.authService.login(email, password, ip);

      this.success(res, userData, 'Login Successful');
    } catch (e: any) {
      logger.error(`Unable to login -`, e);
      this.error(res, e);
    }
  }

  @httpGet('/auth/safhir')
  public getSaFHirAuth(@request() req: Request, @response() res: Response) {
    logger.info('Running AuthController.getSaFHirAuth');
    const state = req.query.state as string;

    try {
      if (!state) {
        throw new Error('state is a required param which should hold the patient id');
      }

      passport.authenticate('oauth2', { state })(req, res);
    } catch (e: any) {
      logger.error(`Unable to authenticate with safhir -`, e);
      this.error(res, e);
    }
  }

  @httpGet('/safhir', passport.authenticate('oauth2', { failureRedirect: `https://app.lafia.io/safhir?status=error` }))
  public async getSaFHirToken(@request() req: Request, @response() res: Response) {
    logger.info('Running FhirServerController.getSaFHirToken');
    try {
      const state = req.query.state as string;
      const [stateValue,] = state?.split('?')!;
      const existingConnection = await this.authService.findOneConnection({
        patient_id: stateValue,
        connection_name: 'safhir',
      });

      if (existingConnection) {
        await this.authService.updateConnection(existingConnection.id!, {
            // @ts-ignore
            refresh_token: global.refreshToken,
            // @ts-ignore
            access_token: global.accessToken,
            ...existingConnection
          }
        );
      } else {
        await this.authService.addConnection({
          connection_name: 'safhir',
          patient_id: stateValue,
          // @ts-ignore
          refresh_token: global.refreshToken,
          // @ts-ignore
          access_token: global.accessToken,
        });
      }

      // @ts-ignore
      const redirectURL = `https://app.lafia.io/safhir?status=success&state=${state}&access_token=${global.accessToken}`;

      res.redirect(redirectURL);
    } catch (e: any) {
      logger.error(`Unable to get SaFHIR token -`, e);
      this.error(res, e);
    }
  }

  @httpGet('/connections')
  public async getConnections(@request() req: Request, @response() res: Response) {
    logger.info('Running FhirServerController.getConnections');
    try {
      const { state } = req.query;

      if (!state) {
        throwError('state is a required param which represents the patient ID', error.badRequest);
      }

      const connections = await this.authService.getConnectionByPatientId(state as string);

      this.success(res, connections, 'Connections retrieved successfully');
    } catch (e: any) {
      logger.error(`Unable to get SaFHIR Connections -`, e);
      this.error(res, e);
    }
  }

  @httpDelete('/connections/:id')
  public async deleteConnection(@request() req: Request, @response() res: Response) {
    logger.info('Running FhirServerController.delete');
    try {
      const { id } = req.params;
      const connections = await this.authService.deleteConnection(id);

      this.success(res, connections, 'Connection deleted successfully');
    } catch (e: any) {
      logger.error(`Unable to delete a connection -`, e);
      this.error(res, e);
    }
  }
}
