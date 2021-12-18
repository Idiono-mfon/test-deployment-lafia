import { Request, Response } from 'express';
import { inject } from 'inversify';
import {
  controller,
  httpGet,
  httpPut,
  httpPost,
  response,
  request,
} from 'inversify-express-utils';
import TYPES from '../../config/types';
import { uploadFile } from '../../middlewares';
import {
  IAttachment,
  IPatient,
  IPatientWithToken
} from '../../models';
import { PatientService, eventService, eventName } from '../../services';
import { HttpStatusCode, logger } from '../../utils';
import { BaseController } from '../baseController';

@controller('/patients')
export class PatientController extends BaseController {
  @inject(TYPES.PatientService)
  private readonly patientService: PatientService;

  @httpPut('/:id')
  public async updatePatient(@request() req: Request, @response() res: Response) {
    logger.info('Running PatientController.update');
    try {
      const { id: patientId } = req.params;
      const patientData: IPatient = req.body;

      const patient = await this.patientService.update(patientId, { id: patientId, ...patientData });

      this.success(res, patient, 'Patient profile successfully updated');
    } catch (e: any) {
      logger.error(`Error updating patient data:`, e);
      this.error(res, e);
    }
  }

  @httpGet('/:id')
  public async findPatientById(@request() req: Request, @response() res: Response) {
    logger.info('Running PatientController.findById');
    try {
      const { id } = req.params;
      const patient: IPatient = await this.patientService.findById(id);

      this.success(res, patient, 'Request completed');
    } catch (e: any) {
      logger.error(`Error finding patient with id - ${req?.params?.id}:`, e);
      this.error(res, e);
    }
  }

  @httpPost('/')
  public async createPatient(@request() req: Request, @response() res: Response) {
    logger.info('Running PatientController.create');
    try {
      const patientData: any = { ...req.body, provider: 'lafia' };
      // @ts-ignore
      const ip: string = req.headers['x-forwarded-for']?.split(',').shift() || req.socket?.remoteAddress;

      const patient: IPatientWithToken = await this.patientService.create(patientData, ip);

      const responseData = {
        data: patientData,
        resource_type: patient?.user?.resourceType as string
      };

      // Raise new patient event
      eventService.emit(eventName.newPatient, patient?.user?.id, responseData);

      this.success(res, patient, 'Patient registration successful', HttpStatusCode.CREATED);
    } catch (e: any) {
      logger.error(`Error creating patient:`, e);
      this.error(res, e);
    }
  }

  @httpPost('/:id/attachments', TYPES.AuthMiddleware, uploadFile.single('file'))
  public async uploadAttachment(@request() req: Request, @response() res: Response) {
    logger.info('Running PatientController.uploadAttachment');
    try {
      const { id: patientId } = req.params;
      const { file } = req;

      const attachment: IAttachment = await this.patientService.uploadAttachment(patientId, file!);

      this.success(res, attachment, 'Request completed successfully');
    } catch (e: any) {
      logger.error(`Error uploading attachment:`, e);
      this.error(res, e);
    }
  }

  @httpGet('/:id/broadcast/videos')
  public async broadcastVideos(@request() req: Request, @response() res: Response) {
    logger.info('Running PatientController.broadcastVideos');
    try {
      const { id: patientId } = req.params;
      const vid = await this.patientService.findPatientVideoBroadcast(patientId);
      this.success(res, vid, 'Request completed successfully');
    } catch (e: any) {
      logger.error(`Error broadcasting patient video:`, e);
      this.error(res, e);
    }
  }
}
