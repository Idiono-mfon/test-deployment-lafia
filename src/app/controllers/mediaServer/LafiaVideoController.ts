import { Request, Response } from 'express';
import { inject } from 'inversify';
import { controller, httpDelete, httpGet, httpPost, request, response } from 'inversify-express-utils';
import TYPES from '../../config/types';
import { AuthMiddleware } from '../../middlewares';
import { LafiaMediaService, VideoBroadcastService } from '../../services';
import { HttpStatusCode } from '../../utils';
import { BaseController } from '../baseController';

@controller('/video')
export class LafiaVideoController extends BaseController {
  @inject(TYPES.VideoBroadcastService)
  private readonly videoBroadcastService: VideoBroadcastService;
  @inject(TYPES.AuthMiddleware)
  private readonly auth: AuthMiddleware;

  @httpGet('/broadcast', TYPES.AuthMiddleware)
  public async createBroadcast(@request() req: Request, @response() res: Response) {
    try {
      const { user } = res.locals;
      const broadcast = await this.videoBroadcastService.getAllVideoRecords(user?.id);

      this.success(res, broadcast, 'Broadcast fetched successfully', HttpStatusCode.OK);
    } catch (e) {
      this.error(res, e);
    }
  }

  @httpPost('/broadcast/patient/:patient_id')
  public async fetchPatientVideo(@request() req: Request, @response() res: Response): Promise<void> {
    try {
      // Retrieve the request's body
      const { patient_id } = req.params;

      const videoUrl = await this.videoBroadcastService.getAllVideoRecords(patient_id);

      this.success(res, videoUrl, 'broadcast retrieved successfully');

    } catch (e) {
      console.log(e);
    }
  }

  @httpPost('/broadcast/practitioner/:practitioner_id')
  public async fetchPractitionerVideo(@request() req: Request, @response() res: Response): Promise<void> {
    try {
      // Retrieve the request's body
      const { practitioner_id } = req.params;

      const videoUrl = await this.videoBroadcastService.getAllVideoRecords(practitioner_id);

      this.success(res, videoUrl, 'broadcast retrieved successfully');

    } catch (e) {
      console.log(e);
    }
  }
}