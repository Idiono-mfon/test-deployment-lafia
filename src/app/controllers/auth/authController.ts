import { inject } from 'inversify';
import {
  controller,
  httpDelete,
  httpGet,
  httpPost,
  request,
  response
} from 'inversify-express-utils';
import { Request, Response } from 'express';
import TYPES from '../../config/types';
import { AuthService } from '../../services';
import { error, logger, throwError } from '../../utils';
import { BaseController } from '../baseController';
import { passport } from '../..';

@controller('')
export class AuthController extends BaseController {
  @inject(TYPES.AuthService)
  private authService: AuthService;

  @httpPost('/auth/login')
  public async login(@request() req: Request, @response() res: Response): Promise<void> {
    logger.info('Executing AuthController::login');
    try {
      const { email, password } = req.body;
      const userData = await this.authService.login(email, password, req);

      this.success(res, userData, 'Login Successful');
    } catch (e: any) {
      logger.error(`Unable to login: ${e.message}`);
      this.error(res, e);
    }
  }

  @httpGet('/auth/safhir')
  public getSaFHirAuth(@request() req: Request, @response() res: Response) {
    logger.info('Executing AuthController::getSaFHirAuth');
    const state = req.query.state as string;

    try {
      if (!state) {
        throw new Error('state is a required param which should hold the patient id');
      }

      passport.authenticate('oauth2', { state })(req, res);
    } catch (e: any) {
      logger.error(`Unable to authenticate with safhir: e.message`);
      this.error(res, e);
    }
  }

  @httpGet('/safhir', passport.authenticate('oauth2', { failureRedirect: `https://app.lafia.io/safhir?status=error` }))
  public async getSaFHirToken(@request() req: Request, @response() res: Response) {
    logger.info('Executing FhirServerController::getSaFHirToken');
    try {
      const state = req.query.state as string;
      const [stateValue,] = state?.split('?')!;
      const existingConnection = await this.authService.getConnectionByFields({
        patient_id: stateValue,
        connection_name: 'safhir',
      });

      if (existingConnection) {
        await this.authService.updateConnection({
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
      logger.error(`Unable to get SaFHIR token:: ${e.message}`);
      this.error(res, e);
    }
  }

  @httpGet('/connections')
  public async getConnections(@request() req: Request, @response() res: Response) {
    logger.info('Executing FhirServerController::getConnections');
    try {
      const { state } = req.query;

      if (!state) {
        throwError('state is a required param which represents the patient ID', error.badRequest);
      }

      const connections = await this.authService.getConnectionByPatientId(state as string);

      this.success(res, connections, 'Connections retrieved successfully');
    } catch (e: any) {
      logger.error(`Unable to get SaFHIR Connections: ${e.message}`);
      this.error(res, e);
    }
  }

  @httpDelete('/connections/:id')
  public async deleteConnection(@request() req: Request, @response() res: Response) {
    logger.info('Executing FhirServerController::deleteConnection');
    try {
      const { id } = req.params;
      const connections = await this.authService.deleteConnection(id);

      this.success(res, connections, 'Connection deleted successfully');
    } catch (e: any) {
      logger.error(`Unable to delete a connection: ${e.message}`);
      this.error(res, e);
    }
  }
}
