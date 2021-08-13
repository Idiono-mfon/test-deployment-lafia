import { Request, Response } from 'express';
import { inject } from 'inversify';
import { controller, httpDelete, httpGet, httpPost, request, response } from 'inversify-express-utils';
import TYPES from '../../config/types';
import { AuthMiddleware } from '../../middlewares';
import { LafiaMediaService } from '../../services';
import { HttpStatusCode } from '../../utils';
import { BaseController } from '../baseController';

@controller('/media')
export class LafiaMediaController extends BaseController {
  @inject(TYPES.LafiaMediaService)
  private readonly lafiaMediaService: LafiaMediaService;
  @inject(TYPES.AuthMiddleware)
  private readonly auth: AuthMiddleware;

  @httpPost('/broadcast', TYPES.AuthMiddleware)
  public async createBroadcast(@request() req: Request, @response() res: Response) {
    try {
      const { user } = res.locals;
      const broadcast = await this.lafiaMediaService.createBroadcast(user?.id);

      this.success(res, broadcast, 'Broadcast created successfully', HttpStatusCode.CREATED);
    } catch (e) {
      this.error(res, e);
    }
  }

  @httpPost('/events')
  public async listenForMediaServerEvent(@request() req: Request, @response() res: Response): Promise<void> {
    try {
      // Retrieve the request's body
      const event = req.body;

      console.log('MediaEvent:', event);

      if (event?.action === 'vodReady') {
        const streamUrl = await this.lafiaMediaService.getRecordedStream(event?.vodId);

        if (streamUrl) {
          const videoRecord = await this.lafiaMediaService.getOneVideoRecord({ streamId: event?.id });

          if (videoRecord) {
            await this.lafiaMediaService.updateVideoRecord(videoRecord?.id!, {
              vodId: event?.vodId,
              stream_url: streamUrl
            });
          }
        }
      }

      res.sendStatus(200);
    } catch (e) {
      console.log(e);
    }
  }

  @httpGet('/broadcast/:streamId', TYPES.AuthMiddleware)
  public async getRecordedStream(@request() req: Request, @response() res: Response) {
    try {
      const{ streamId } = req.params;
      const broadcast = await this.lafiaMediaService.getOneVideoRecord({ streamId });

      this.success(res, broadcast, 'Recorded Video Retrieved successfully', HttpStatusCode.CREATED);
    } catch (e) {
      this.error(res, e);
    }
  }

  @httpGet('/broadcast', TYPES.AuthMiddleware)
  public async getAllRecordedStream(@request() req: Request, @response() res: Response) {
    try {
      const { user } = res.locals;
      const broadcast = await this.lafiaMediaService.getAllVideoRecords(user?.id!);

      this.success(res, broadcast, 'Recorded Video Retrieved successfully', HttpStatusCode.CREATED);
    } catch (e) {
      this.error(res, e);
    }
  }

  @httpDelete('/broadcast/:id', TYPES.AuthMiddleware)
  public async getRecordedStreamUrl(@request() req: Request, @response() res: Response) {
    try {
      const{ id } = req.params;
      const broadcast = await this.lafiaMediaService.deleteVideoRecord(id);

      this.success(res, broadcast, 'Recorded Video deleted successfully', HttpStatusCode.CREATED);
    } catch (e) {
      this.error(res, e);
    }
  }
}