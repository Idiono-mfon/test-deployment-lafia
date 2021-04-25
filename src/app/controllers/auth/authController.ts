import { inject } from 'inversify';
import {
  controller,
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
      const userData = await this.authService.login(email, password);

      this.success(res, userData, 'Login Successful');
    } catch (e) {
      this.error(res, e);
    }
  }
}
