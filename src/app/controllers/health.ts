import { Request, Response } from 'express';
import { controller, httpGet } from 'inversify-express-utils';
import { BaseController } from './baseController';

@controller('/health')
export class HealthController extends BaseController {

  @httpGet('/')
  public basicCheck(_: Request, res: Response) {

    this.success(res, null, 'Basic Health Check Route Working.');

  }
}
