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
import { Env } from '../../config/env';
import TYPES from '../../config/types';
import { uploadFile } from '../../middlewares';
import {
  IAttachment,
  IPractitioner, IPractitionerWithToken
} from '../../models';
import {
  PractitionerService,
  successResponseType,
  KafkaService,
  KafkaSetup
} from '../../services';
import { HttpStatusCode, logger } from '../../utils';
import { BaseController } from '../baseController';

const env = Env.all();

@controller('/practitioners')
export class PractitionerController extends BaseController {
  @inject(TYPES.PractitionerService)
  private readonly practitionerService: PractitionerService;
  @inject(TYPES.KafkaService)
  private readonly kafkaService: KafkaService;
  @inject(TYPES.KafkaSetup)
  private readonly kafkaSetup: KafkaSetup;

  @httpPut('/:id')
  public async updatePractitioner(@request() req: Request, @response() res: Response) {
    logger.info('Running PractitionerController.updatePractitioner');
    try {
      const { id: practitionerId } = req.params;
      const practitionerData: IPractitioner = req.body;

      const practitioner = await this.practitionerService.updatePractitioner(practitionerId, { id: practitionerId, ...practitionerData });

      this.success(res, practitioner, 'Practitioner profile successfully updated');
    } catch (e: any) {
      logger.error(`Error updating practitioner data:`, e);
      this.error(res, e);
    }
  }

  @httpGet('/:id')
  public async findPractitionerById(@request() req: Request, @response() res: Response) {
    logger.info('Running PractitionerController.findPractitionerById');
    try {
      const { id } = req.params;
      const practitioner: IPractitioner = await this.practitionerService.findPractitionerById(id);

      this.success(res, practitioner, 'Request completed');
    } catch (e: any) {
      logger.error(`Error finding practitioner with id - ${req?.params?.id}:`, e);
      this.error(res, e);
    }
  }

  @httpPost('')
  public async createPractitioner(@request() req: Request, @response() res: Response) {
    logger.info('Running PractitionerController.createPractitioner');
    try {
      const practitionerData: any = req.body;
      const practitioner: IPractitionerWithToken = await this.practitionerService.createPractitioner(practitionerData);
      const responseData = {
        data: practitionerData,
        resource_type: practitioner?.user?.resourceType as string
      };

      const kafkaProducerMsg = this.kafkaSetup.structureSuccessData(successResponseType.default, responseData, 'Resource created successfully', practitioner?.user?.id);
      await this.kafkaService.producer(env.kafka_erpnext_producer_topic, kafkaProducerMsg);

      this.success(res, practitioner, 'Practitioner registration successful', HttpStatusCode.CREATED);
    } catch (e: any) {
      logger.error(`Error creating practitioner:`, e);
      this.error(res, e);
    }
  }

  @httpPost('/:id/attachments', uploadFile.single('file'))
  public async uploadAttachment(@request() req: Request, @response() res: Response) {
    logger.info('Running PractitionerController.uploadAttachment');
    try {
      const { id: practitionerId } = req.params;
      const attachment: IAttachment = await this.practitionerService.uploadAttachment(practitionerId, req?.file!);

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
      const vid = await this.practitionerService.findAssignedPractitionerVideoBroadcast(practitionerId);
      this.success(res, vid, 'Request completed successfully');
    } catch (e: any) {
      logger.error(`Error broadcasting video:`, e);
      this.error(res, e);
    }
  }
}
