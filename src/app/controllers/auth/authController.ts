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

      passport.use(this.authService.getStrategy('safhir'));
      passport.authenticate('oauth2', { state })(req, res);
    } catch (e: any) {
      this.error(res, e);
    }
  }

  @httpGet('/safhir', passport.authenticate('oauth2', { failureRedirect: `https://app.lafia.io/safhir?status=error` }))
  public getSaFHirToken(@request() req: Request, @response() res: Response) {
    try {
      // @ts-ignore
      const redirectURL = `https://app.lafia.io/safhir?status=success&state=${req.query.state}&access_token=${global.accessToken}`;

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
}
