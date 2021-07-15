import { Request, Response } from 'express';
import { inject } from 'inversify';
import {
  controller, httpPost, httpPut, request, response
} from 'inversify-express-utils';
import TYPES from '../../config/types';
import { TwilioService, UserService } from '../../services';
import { HttpStatusCode } from '../../utils';
import { BaseController } from '../baseController';

@controller('/users')
export class UserController extends BaseController {
  @inject(TYPES.UserService)
  private userService: UserService;

  @inject(TYPES.TwilioService)
  private twilioService: TwilioService;

  @httpPost('/register')
  public async createUser(@request() req: Request, @response() res: Response) {
    try {
      const newUser = await this.userService.createUser(req.body);

      this.success(res, newUser, 'User created', HttpStatusCode.CREATED);
    } catch (e) {
      this.error(res, e);
    }
  }

  @httpPut('/:id/change-password')
  public async updatePassword(@request() req: Request, @response() res: Response) {
    try {
      const { id } = req.params;
      const { old_password, new_password } = req.body;

      const updatedUser = await this.userService.changePassword(id, old_password, new_password);

      this.success(res, updatedUser, 'User password changed successfully');
    } catch (e) {
      this.error(res, e);
    }
  }

  @httpPost('/reset-password')
  public async resetPassword(@request() req: Request, @response() res: Response) {
    try {
      const { email } = req.body;

      await this.userService.resetPassword(email);

      this.success(res, [], 'Password reset guide successfully sent to the users email');
    } catch (e) {
      this.error(res, e);
    }
  }

  @httpPost('/check')
  public async check(@request() req: Request, @response() res: Response) {
    try {
      const { field, value } = req.body;

      const user = await this.userService.getUserByFeild(field, value);

      const exist = user ? true : false;

      this.success(res, [exist], 'user checked successfully');
    } catch (e) {
      this.error(res, e);
    }
  }

  @httpPost('/otp/send')
  public async sendOtp(@request() req: Request, @response() res: Response) {
    try {
      const { phone } = req.body;
      const otp = await this.twilioService.sendOTP(phone);
      this.success(res, otp, 'OTP sent');
    } catch (e) {
      this.error(res, e);
    }
  }

  @httpPost('/otp/verify')
  public async verifyOtp(@request() req: Request, @response() res: Response) {
    try {
      const { phone, code } = req.body;
      const verify = await this.twilioService.verifyOTP(phone, code);
      this.success(res, verify, 'OTP verification checked');
    } catch (e) {
      this.error(res, e);
    }
  }

}
