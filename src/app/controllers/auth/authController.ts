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
import { error, throwError } from '../../utils';
import { BaseController } from '../baseController';
import { passport } from '../..';

@controller('')
export class AuthController extends BaseController {
  @inject(TYPES.AuthService)
  private authService: AuthService;

  @httpPost('/auth/login')
  public async login(@request() req: Request, @response() res: Response): Promise<void> {
    try {
      const { email, password } = req.body;
      const userData = await this.authService.login(email, password, req);

      this.success(res, userData, 'Login Successful');
    } catch (e: any) {
      this.error(res, e);
    }
  }

  @httpGet('/auth/safhir')
  public getSaFHirAuth(@request() req: Request, @response() res: Response) {
    const state = req.query.state as string;

    try {
      if (!state) {
        throw new Error('state is a required param which should hold the patient id');
      }

      passport.authenticate('oauth2', { state })(req, res);
    } catch (e: any) {
      this.error(res, e);
    }
  }

  @httpGet('/safhir', passport.authenticate('oauth2', { failureRedirect: `https://app.lafia.io/safhir?status=error` }))
  public async getSaFHirToken(@request() req: Request, @response() res: Response) {
    try {
      const { state } = req.query;
      const existingConnection = await this.authService.getConnectionByFields({
        patient_id: state as string,
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
          patient_id: state as string,
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
      this.error(res, e);
    }
  }

  @httpGet('/auth/safhir/token/refresh', passport.authenticate('refresh_token', { session: false }))
  public refreshSaFHirToken(@request() req: Request, @response() res: Response) {
    try {
      // generate new tokens for req.user
      // @ts-ignore
      console.log('Token:', token);
      // @ts-ignore
      console.log('Tokens:', tokens);
      // @ts-ignore
      res.json(tokens);
    } catch (e: any) {
      this.error(res, e);
    }
  }

  @httpGet('/connections')
  public async getConnections(@request() req: Request, @response() res: Response) {
    try {
      const { state } = req.query;

      if (!state) {
        throwError('state is a required param which represents the patient ID', error.badRequest);
      }

      const connections = await this.authService.getConnectionByPatientId(state as string);

      this.success(res, connections, 'Connections retrieved successfully');
    } catch (e: any) {
      this.error(res, e);
    }
  }

  @httpDelete('/connections/:id')
  public async deleteConnection(@request() req: Request, @response() res: Response) {
    try {
      const { id } = req.params;
      const connections = await this.authService.deleteConnection(id);

      this.success(res, connections, 'Connection deleted successfully');
    } catch (e: any) {
      this.error(res, e);
    }
  }
}
