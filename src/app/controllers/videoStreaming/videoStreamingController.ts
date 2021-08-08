import { Request, Response } from 'express';
import { inject } from 'inversify';
import {
  controller,
  httpPost,
  request,
  response
} from 'inversify-express-utils';
import TYPES from '../../config/types';
import { LafiaMediaService, VideoRecordService } from '../../services';
import { BaseController } from '../baseController';

@controller('/video-streaming')
export class IvsController extends BaseController {

  @inject(TYPES.VideoRecordService)
  private videoRecordService: VideoRecordService;

  @inject(TYPES.LafiaMediaService)
  private readonly lafiaMediaService: LafiaMediaService;

  @httpPost('/events')
  public async listenForAwsIvsEvent(@request() req: Request, @response() res: Response): Promise<void> {
    try {
      // Retrieve the request's body
      const event = req.body;

      if (event?.action === 'vodReady') {
        const streamUrl = await this.lafiaMediaService.getRecordedStream(event?.vodId);

        if (streamUrl) {
          const videoRecord = await this.videoRecordService.getOneVideoRecord({ streamId: event?.id });

          if (videoRecord) {
            await this.videoRecordService.updateVideoRecord(videoRecord?.id!, {
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
}