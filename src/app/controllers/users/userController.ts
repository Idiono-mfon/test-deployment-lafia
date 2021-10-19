import { Request, Response } from 'express';
import { inject } from 'inversify';
import {
  controller, httpGet, httpPost, httpPut, request, response
} from 'inversify-express-utils';
import TYPES from '../../config/types';
import { IUser, IUserPhoto } from '../../models';
import { TwilioService, UserService } from '../../services';
import { HttpStatusCode, logger } from '../../utils';
import { BaseController } from '../baseController';

@controller('/users')
export class UserController extends BaseController {
  @inject(TYPES.UserService)
  private userService: UserService;

  @inject(TYPES.TwilioService)
  private twilioService: TwilioService;

  @httpPost('/register')
  public async createUser(@request() req: Request, @response() res: Response) {
    logger.info('Running UserController::createUser');
    const user: IUser = req.body
    try {
      const newUser = await this.userService.createUser(user);

      this.success(res, newUser, 'User created', HttpStatusCode.CREATED);
    } catch (e: any) {
      logger.error(`Unable to create user -`, e);
      this.error(res, e);
    }
  }

  @httpPost('/validate')
  public async validateUser(@request() req: Request, @response() res: Response) {
    logger.info('Running UserController::validateUser');
    try {
      // @ts-ignore
      const ip: string = req.headers['x-forwarded-for']?.split(',').shift() || req.socket?.remoteAddress;

      const newUser = await this.userService.validateUser(req.body, ip);

      this.success(res, newUser, 'User created', HttpStatusCode.CREATED);
    } catch (e: any) {
      logger.error(`Unable to validate user -`, e);
      this.error(res, e);
    }
  }

  @httpGet('/photo', TYPES.AuthMiddleware)
  public async getUserPhoto(@request() req: Request, @response() res: Response) {
    logger.info('Running UserController::getUserPhoto');
    try {
      const user = await this.userService.getOneUser({resource_id: req.body.user.id});

      this.success(res, user.photo, 'Photo fetched', HttpStatusCode.OK);
    } catch (e: any) {
      logger.error(`Unable to get user photo -`, e);
      this.error(res, e);
    }
  }

  @httpPost('/photo', TYPES.AuthMiddleware)
  public async updatePhoto(@request() req: Request, @response() res: Response) {
    logger.info('Running UserController::updatePhoto');
    try {
      const {id} = req.body.user;
      if ( req.body.user ) {
        delete req.body.user;
      }
      const photo: IUserPhoto = req.body
      const user = await this.userService.updateUser( id, photo );

      this.success(res, user, 'Photo updated', HttpStatusCode.CREATED);
    } catch (e: any) {
      logger.error(`Unable to update user photo -`, e);
      this.error(res, e);
    }
  }

  @httpPost('/update', TYPES.AuthMiddleware)
  public async updateUser(@request() req: Request, @response() res: Response) {
    logger.info('Running UserController::updateUser');
    try {
      const user = await this.userService.updateUser(req.body.user.id, req.body);

      this.success(res, user, 'User updated', HttpStatusCode.CREATED);
    } catch (e: any) {
      logger.error(`Unable to update user -`, e);
      this.error(res, e);
    }
  }

  @httpPut('/:id/change-password')
  public async updatePassword(@request() req: Request, @response() res: Response) {
    logger.info('Running UserController::updatePassword');
    try {
      const { id } = req.params;
      const { old_password, new_password } = req.body;

      const updatedUser = await this.userService.changePassword(id, old_password, new_password);

      this.success(res, updatedUser, 'User password changed successfully');
    } catch (e: any) {
      logger.error(`Unable to update user password -`, e);
      this.error(res, e);
    }
  }

  @httpPost('/reset-password')
  public async resetPassword(@request() req: Request, @response() res: Response) {
    logger.info('Running UserController::resetPassword');
    try {
      const { email } = req.body;

      await this.userService.resetPassword(email);

      this.success(res, [], 'Password reset guide successfully sent to the users email');
    } catch (e: any) {
      logger.error(`Unable to reset user password -`, e);
      this.error(res, e);
    }
  }

  @httpPost('/check')
  public async check(@request() req: Request, @response() res: Response) {
    logger.info('Running UserController::check');
    try {
      const { field, value } = req.body;

      const user = await this.userService.getUserByField(field, value);

      const exist = !!user;

      this.success(res, { exist }, 'user checked successfully');
    } catch (e: any) {
      logger.error(`Unable to verify user`, e);
      this.error(res, e);
    }
  }

  @httpPost('/otp/send')
  public async sendOtp(@request() req: Request, @response() res: Response) {
    logger.info('Running UserController::sendOtp');
    try {
      const { phone } = req.body;
      const otp = await this.twilioService.sendOTP(phone);
      this.success(res, otp, 'OTP sent');
    } catch (e: any) {
      logger.error(`Unable to send OTP to user`, e);
      this.error(res, e);
    }
  }

  @httpPost('/otp/verify')
  public async verifyOtp(@request() req: Request, @response() res: Response) {
    logger.info('Running UserController::verifyOtp');
    try {
      const { phone, code } = req.body;
      const verify = await this.twilioService.verifyOTP(phone, code);
      this.success(res, verify, 'OTP verification checked');
    } catch (e: any) {
      logger.error(`Unable to verify user's OTP`, e);
      this.error(res, e);
    }
  }

  @httpPost('/existing')
  public async checkExistingUser(@request() req: Request, @response() res: Response) {
    logger.info('Running UserController::checkExistingUser');
    try {
      await this.userService.checkExistingUser(req.body);

      this.success(res, {}, 'User does not exist');
    } catch (e: any) {
      logger.error(`Unable to check for existing user`, e);
      this.error(res, e);
    }
  }

  @httpPost('/access/generate')
  public async generateTwilioAccessToken(@request() req: Request, @response() res: Response) {
    logger.info('Running UserController::generateTwilioAccessToken');
    try {
      const { identity, room } = req.body;
      const verify = await this.twilioService.generateAccessToken(identity, room, true);
      this.success(res, verify, 'Access Token');
    } catch (e: any) {
      logger.error(`Unable to generate twilio access token -`, e);
      this.error(res, e);
    }
  }

}
