import { Request, Response } from 'express';
import { inject } from 'inversify';
import {
  controller, httpPost, request, response
} from 'inversify-express-utils';
import TYPES from '../../config/types';
import { UserService } from '../../services';
import { HttpStatusCode } from '../../utils';
import { BaseController } from '../baseController';

@controller('/users')
export class UserController extends BaseController {
  @inject(TYPES.UserService)
  private userService: UserService;

  @httpPost('/register')
  public async createUser(@request() req: Request, @response() res: Response) {
    try {
      const newUser = await this.userService.createUser(req.body);

      this.success(res, newUser, 'User created', HttpStatusCode.CREATED);
    } catch (e) {
      this.error(res, e.code, e.message);
    }
  }
}
