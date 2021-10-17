import { Request, Response } from 'express';
import { inject } from 'inversify';
import {
  controller,
  httpDelete,
  httpGet,
  request,
  response
} from 'inversify-express-utils';
import TYPES from '../../config/types';
import { AuthMiddleware } from '../../middlewares';
import { VideoBroadcastService } from '../../services';
import { HttpStatusCode, logger } from '../../utils';
import { BaseController } from '../baseController';

@controller('/video')
export class LafiaVideoController extends BaseController {
  @inject(TYPES.VideoBroadcastService)
  private readonly videoBroadcastService: VideoBroadcastService;
  @inject(TYPES.AuthMiddleware)
  private readonly auth: AuthMiddleware;

  @httpGet('/broadcast', TYPES.AuthMiddleware)
  public async createBroadcast(@request() req: Request, @response() res: Response) {
    logger.info('Running LafiaVideoController::createBroadcast');
    try {
      const { user } = res.locals;
      const broadcast = await this.videoBroadcastService.getAllVideoRecords(user?.id);

      this.success(res, broadcast, 'Broadcast fetched successfully', HttpStatusCode.OK);
    } catch (e: any) {
      logger.error(`Unable to create broadcast -`, e);
      this.error(res, e);
    }
  }

  @httpDelete('/broadcast/:id')
  public async deleteBroadcast(@request() req: Request, @response() res: Response) {
    logger.info('Running LafiaVideoController::deleteBroadcast');
    try {
      const { id } = req.params;
      const broadcast = await this.videoBroadcastService.deleteVideoBroadcastRecords(id);

      this.success(res, broadcast, 'Broadcast delete successfully', HttpStatusCode.OK);
    } catch (e: any) {
      logger.error(`Unable to delete broadcast -`, e);
      this.error(res, e);
    }
  }

  @httpGet('/broadcast/patient/:patient_id')
  public async fetchPatientVideo(@request() req: Request, @response() res: Response): Promise<void> {
    logger.info('Running LafiaVideoController::fetchPatientVideo');
    try {
      // Retrieve the request's body
      const { patient_id } = req.params;

      const videoUrl = await this.videoBroadcastService.getAllVideoRecords(patient_id);

      this.success(res, videoUrl, 'broadcast retrieved successfully');

    } catch (e: any) {
      logger.error(`Unable to fetch patient video -`, e);
    }
  }

  @httpGet('/broadcast/practitioner/:practitioner_id')
  public async fetchPractitionerVideo(@request() req: Request, @response() res: Response): Promise<void> {
    logger.info('Running LafiaVideoController::fetchPractitionerVideo');
    try {
      // Retrieve the request's body
      const { practitioner_id } = req.params;

      const videoUrl = await this.videoBroadcastService.getAllPractitionerBroadcastVideos(practitioner_id);

      this.success(res, videoUrl, 'broadcast retrieved successfully');

    } catch (e: any) {
      logger.error(`Unable to fetch practitioner video -`, e);
    }
  }

  @httpDelete('/broadcast/practitioner/:id')
  public async deletePractitionerBroadcast(@request() req: Request, @response() res: Response) {
    logger.info('Running LafiaVideoController::deletePractitionerBroadcast');
    try {
      const { id } = req.params;
      const broadcast = await this.videoBroadcastService.deletePractitionerBroadcastVideo(id);

      this.success(res, broadcast, 'Broadcast delete successfully', HttpStatusCode.OK);
    } catch (e: any) {
      logger.error(`Unable to delete practitioner broadcast -`, e);
      this.error(res, e);
    }
  }
}
