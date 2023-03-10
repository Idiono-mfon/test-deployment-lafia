import { Request, Response } from 'express';
import { inject } from 'inversify';
import { controller, httpGet, httpPut, httpPost, response, request } from 'inversify-express-utils';
import TYPES from '../../config/types';
import { uploadFile, validationMiddleware } from '../../middlewares';
import { IAttachment, IPatient, IPatientWithToken } from '../../models';
import { eventService, eventName, IPatientService } from '../../services';
import { HttpStatusCode, ICsvImporter, IFhirImporter, logger } from '../../utils';
import { BaseController } from '../baseController';
import { CreatePatientDto } from './dto';

@controller('/patients')
export class PatientController extends BaseController {
  @inject(TYPES.PatientService)
  private readonly patientService: IPatientService;

  @inject(TYPES.FhirImporter)
  private readonly myFhirImporter: IFhirImporter;

  @inject(TYPES.CsvImporter)
  private readonly myCsvImporter: ICsvImporter;

  @httpPut('/:id')
  public async updatePatient(@request() req: Request, @response() res: Response) {
    logger.info('Running PatientController.update');
    try {
      const { id: patientId } = req.params;
      const patientData: IPatient = req.body;

      const patient = await this.patientService.update(patientId, {
        id: patientId,
        ...patientData,
      });

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

  @httpPost('/', validationMiddleware(CreatePatientDto))
  public async createPatient(@request() req: Request, @response() res: Response) {
    logger.info('Running PatientController.createPatient');
    try {
      const patientData: any = { ...req.body, provider: 'lafia' };
      // @ts-ignore
      const ip: string = // @ts-ignore
        req.headers['x-forwarded-for']?.split(',').shift() || req.socket?.remoteAddress;

      const patient: IPatientWithToken = await this.patientService.create(patientData, ip);

      const responseData = {
        data: patientData,
        resource_type: patient?.user?.resourceType as string,
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

  @httpGet('/')
  public async importer(@request() req: Request, @response() res: Response) {
    logger.info('Running PatientController.importer');

    try {
      // FHIR
      // const path = 'C:\\projects\\parallelscore\\synthea\\executable\\output_16-6-2022_staging\\fhir\\Kenneth671_Fadel536_be6346e2-fda6-4bf1-7af6-78ffc6998699.json';
      // await this.myFhirImporter.uploadEncountersFhirData(path);
      // await this.myFhirImporter.uploadClaimsFhirData(path);

      // OR

      // CSV
      // const path = 'C:\\projects\\parallelscore\\synthea\\executable\\output_16-6-2022_staging\\csv\\encounters.csv';
      // await this.myCsvImporter.uploadEncountersCsv(path);
      // await this.myFhirImporter.uploadClaimsFhirData(path);
      this.success(res, {}, 'Data upload successful', HttpStatusCode.CREATED);
    } catch (e: any) {
      logger.error(`Error uploading fhir data:`, e);
      this.error(res, e);
    }
  }

  @httpPut(':id/profile')
  public async updatePatientProfile(@request() req: Request, @response() res: Response) {
    logger.info('Running PatientController.updatePatientProfile');
    try {
      const { id: patientId } = req.params;
      const patientData: IPatient = req.body;

      const patient = await this.patientService.update(patientId, {
        id: patientId,
        ...patientData,
      });

      this.success(res, patient, 'Patient profile successfully updated');
    } catch (e: any) {
      logger.error(`Error updating patient data:`, e);
      this.error(res, e);
    }
  }

  @httpPut('/:id/residential-address')
  public async updatePatientResidentialAddress(@request() req: Request, @response() res: Response) {
    logger.info('Running PatientController.updatePatientResidentialAddress');
    try {
      const { id: patientId } = req.params;
      const patientData: IPatient = req.body;

      const patient = await this.patientService.update(patientId, {
        id: patientId,
        ...patientData,
      });

      this.success(res, patient, 'Patient profile successfully updated');
    } catch (e: any) {
      logger.error(`Error updating patient data:`, e);
      this.error(res, e);
    }
  }

  @httpPut('/:id/contact-info')
  public async updatePatientContactInfo(@request() req: Request, @response() res: Response) {
    logger.info('Running PatientController.updatePatientContactInfo');
    try {
      const { id: patientId } = req.params;
      const patientData: IPatient = req.body;

      const patient = await this.patientService.update(patientId, {
        id: patientId,
        ...patientData,
      });

      this.success(res, patient, 'Patient profile successfully updated');
    } catch (e: any) {
      logger.error(`Error updating patient data:`, e);
      this.error(res, e);
    }
  }

  @httpPut('/:id/contact-address')
  public async updatePatientContactAddress(@request() req: Request, @response() res: Response) {
    logger.info('Running PatientController.updatePatientContactAddress');
    try {
      const { id: patientId } = req.params;
      const patientData: IPatient = req.body;

      const patient = await this.patientService.update(patientId, {
        id: patientId,
        ...patientData,
      });

      this.success(res, patient, 'Patient profile successfully updated');
    } catch (e: any) {
      logger.error(`Error updating patient data:`, e);
      this.error(res, e);
    }
  }
}
