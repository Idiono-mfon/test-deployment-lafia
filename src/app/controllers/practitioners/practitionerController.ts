import { Request, Response } from 'express';
import { inject } from 'inversify';
import { controller, httpGet, httpPost, httpPut, request, response } from 'inversify-express-utils';
import TYPES from '../../config/types';
import { uploadFile, validationMiddleware } from '../../middlewares';
import { IAttachment, IPractitioner, IPractitionerWithToken } from '../../models';
import { eventName, eventService, IPractitionerService } from '../../services';
import { HttpStatusCode, logger } from '../../utils';
import { BaseController } from '../baseController';
import { CreatePractitionerDto } from './dto';

@controller('/practitioners')
export class PractitionerController extends BaseController {
  @inject(TYPES.PractitionerService)
  private readonly practitionerService: IPractitionerService;

  @httpPut('/:id')
  public async updatePractitioner(@request() req: Request, @response() res: Response) {
    logger.info('Running PractitionerController.update');
    try {
      const { id: practitionerId } = req.params;
      const practitionerData: IPractitioner = req.body;

      const practitioner = await this.practitionerService.update(practitionerId, {
        id: practitionerId,
        ...practitionerData,
      });

      this.success(res, practitioner, 'Practitioner profile successfully updated');
    } catch (e: any) {
      logger.error(`Error updating practitioner data:`, e);
      this.error(res, e);
    }
  }

  @httpGet('/:id')
  public async findPractitionerById(@request() req: Request, @response() res: Response) {
    logger.info('Running PractitionerController.findById');
    try {
      const { id } = req.params;
      const practitioner: IPractitioner = await this.practitionerService.findById(id);

      this.success(res, practitioner, 'Request completed');
    } catch (e: any) {
      logger.error(`Error finding practitioner with id - ${req?.params?.id}:`, e);
      this.error(res, e);
    }
  }

  @httpPost('', validationMiddleware(CreatePractitionerDto))
  public async createPractitioner(@request() req: Request, @response() res: Response) {
    logger.info('Running PractitionerController.create');
    try {
      const ip: string = // @ts-ignore
        req.headers['x-forwarded-for']?.split(',').shift() || req.socket?.remoteAddress;

      const practitionerData: any = { ...req.body, provider: 'lafia', ip };

      const practitioner: IPractitionerWithToken = await this.practitionerService.create(
        practitionerData
      );
      const responseData = {
        data: practitionerData,
        resource_type: practitioner?.user?.resourceType as string,
      };

      // Raise new practitioner event
      eventService.emit(eventName.newPractitioner, practitioner?.user?.id, responseData);

      this.success(
        res,
        practitioner,
        'Practitioner registration successful',
        HttpStatusCode.CREATED
      );
    } catch (e: any) {
      logger.error(`Error creating practitioner:`, e);
      this.error(res, e);
    }
  }

  @httpPost('/:id/attachments', TYPES.AuthMiddleware, uploadFile.single('file'))
  public async uploadAttachment(@request() req: Request, @response() res: Response) {
    logger.info('Running PractitionerController.uploadAttachment');
    try {
      const { id: practitionerId } = req.params;
      const attachment: IAttachment = await this.practitionerService.uploadAttachment(
        practitionerId,
        req?.file!
      );

      this.success(res, attachment, 'Request completed successfully');
    } catch (e: any) {
      logger.error(`Error uploading attachment:`, e);
      this.error(res, e);
    }
  }

  @httpGet('/:id/broadcast/videos')
  public async broadcastVideos(@request() req: Request, @response() res: Response) {
    logger.info('Running PractitionerController.broadcastVideos');
    try {
      const { id: practitionerId } = req.params;
      const vid = await this.practitionerService.findAssignedPractitionerVideoBroadcast(
        practitionerId
      );
      this.success(res, vid, 'Request completed successfully');
    } catch (e: any) {
      logger.error(`Error broadcasting video:`, e);
      this.error(res, e);
    }
  }
}
