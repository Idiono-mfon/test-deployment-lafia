import { inject } from 'inversify';
import {
  controller,
  httpGet,
  httpPost,
  request,
  response
} from 'inversify-express-utils';
import { Request, Response } from 'express';
import TYPES from '../../config/types';
import { AuthService } from '../../services';
import { BaseController } from '../baseController';

@controller('/auth')
export class AuthController extends BaseController {
  @inject(TYPES.AuthService)
  private authService: AuthService;

  @httpPost('/login')
  public async login(@request() req: Request, @response() res: Response): Promise<void> {
    try {
      const { email, password } = req.body;
      const userData = await this.authService.login(email, password, req);

      this.success(res, userData, 'Login Successful');
    } catch (e: any) {
      this.error(res, e);
    }
  }

  @httpGet('/safhir')
  public async getSaFHirAuth(@request() req: Request, @response() res: Response): Promise<void> {
    try {
      // get auth and decode jwt for the resource id
      const resp = await this.authService.getSaFHirAuth();

      this.success(res, resp, 'Login Successful');
    } catch (e: any) {
      this.error(res, e);
    }
  }

  @httpPost('/safhir')
  public async getSaFHirToken(@request() req: Request, @response() res: Response): Promise<void> {
    try {
      // get auth and decode jwt for the resource id
      this.authService.getSaFHirToken();

      this.success(res, [], 'Login Successful');
    } catch (e: any) {
      this.error(res, e);
    }
  }

}
