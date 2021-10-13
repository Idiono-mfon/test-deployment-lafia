import { Request, Response } from 'express';
import { inject } from 'inversify';
import {
  controller,
  httpGet,
  httpPost,
  httpPut,
  request,
  response
} from 'inversify-express-utils';
import TYPES from '../../config/types';
import { uploadFile } from '../../middlewares';
import {
  IAttachment,
  IPractitioner, IPractitionerWithToken
} from '../../models';
import {
  MessageBroker,
  rmqSuccessResponse,
  PractitionerService
} from '../../services';
import { HttpStatusCode, logger } from '../../utils';
import { BaseController } from '../baseController';

@controller('/practitioners')
export class PractitionerController extends BaseController {
  @inject(TYPES.PractitionerService)
  private readonly practitionerService: PractitionerService;

  @inject(TYPES.MessageBroker)
  private readonly messageBroker: MessageBroker;

  @httpPut('/:id')
  public async updatePractitioner(@request() req: Request, @response() res: Response) {
    logger.info('Running PractitionerController::updatePractitioner');
    try {
      const { id: practitionerId } = req.params;
      const practitionerData: IPractitioner = req.body;

      const practitioner = await this.practitionerService.updatePractitioner(practitionerId, { id: practitionerId, ...practitionerData });

      this.success(res, practitioner, 'Practitioner profile successfully updated');
    } catch (e: any) {
      logger.error(`Unable to update practitioner data -`, e);
      this.error(res, e);
    }
  }

  @httpGet('/:id')
  public async findPractitionerById(@request() req: Request, @response() res: Response) {
    logger.info('Running PractitionerController::findPractitionerById');
    try {
      const { id } = req.params;
      const practitioner: IPractitioner = await this.practitionerService.findPractitionerById(id);

      this.success(res, practitioner, 'Request completed');
    } catch (e: any) {
      logger.error(`Unable to find practitioner with id - ${req?.params?.id} -`, e);
      this.error(res, e);
    }
  }

  @httpPost('')
  public async createPractitioner(@request() req: Request, @response() res: Response) {
    logger.info('Running PractitionerController::createPractitioner');
    try {
      const practitionerData: any = req.body;
      const practitioner: IPractitionerWithToken = await this.practitionerService.createPractitioner(practitionerData);
      const rmqData = {
        data: practitionerData,
        resource_type: practitioner?.user?.resourceType as string
      };
      const rmqPubMsg = rmqSuccessResponse(
        rmqData,
        practitioner?.user?.id as string,
        'Resource created successfully'
      );
      await this.messageBroker.rmqPublish(JSON.stringify(rmqPubMsg));

      this.success(res, practitioner, 'Practitioner registration successful', HttpStatusCode.CREATED);
    } catch (e: any) {
      logger.error(`Unable to create practitioner -`, e);
      this.error(res, e);
    }
  }

  @httpPost('/:id/attachments', uploadFile.single('file'))
  public async uploadAttachment(@request() req: Request, @response() res: Response) {
    logger.info('Running PractitionerController::uploadAttachment');
    try {
      const { id: practitionerId } = req.params;
      const attachment: IAttachment = await this.practitionerService.uploadAttachment(practitionerId, req?.file!);

      this.success(res, attachment, 'Request completed successfully');
    } catch (e: any) {
      logger.error(`Unable to upload attachment -`, e);
      this.error(res, e);
    }
  }

  @httpGet('/:id/broadcast/videos')
  public async broadcastVideos(@request() req: Request, @response() res: Response) {
    logger.info('Running PractitionerController::broadcastVideos');
    try {
      const { id: practitionerId } = req.params;
      const vid = await this.practitionerService.findAssignedPractitionervideoBroadcast(practitionerId);
      this.success(res, vid, 'Request completed successfully');
    } catch (e: any) {
      logger.error(`Unable to broadcast video -`, e);
      this.error(res, e);
    }
  }
}
