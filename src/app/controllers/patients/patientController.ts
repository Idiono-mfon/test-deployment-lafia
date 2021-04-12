import { Request, Response } from 'express';
import { inject } from 'inversify';
import {
  controller,
  httpPost,
  response,
  request, httpGet, httpPut
} from 'inversify-express-utils';
import TYPES from '../../config/types';
import { uploadFile } from '../../middlewares';
import { IAttachment } from '../../models/attachments';
import { IPatient } from '../../models/patients';
import { PatientService } from '../../services';
import { HttpStatusCode } from '../../utils';
import { BaseController } from '../baseController';

@controller('/patients')
export class PatientController extends BaseController {
  @inject(TYPES.PatientService)
  private readonly patientService: PatientService;

  @httpPut('/:id')
  public async updatePatient(@request() req: Request, @response() res: Response) {
    try {
      const { id: patientId } = req.params;
      const patientData: IPatient = req.body;

      const patient = await this.patientService.updatePatient(patientId, patientData);

      this.success(res, patient, 'Patient profile successfully updated');
    } catch (e) {
      this.error(res, e);
    }
  }

  @httpGet('/:id')
  public async findPatientById(@request() req: Request, @response() res: Response) {
    try {
      const { id } = req.params;
      const patient: IPatient = await this.patientService.findPatientById(id);

      this.success(res, patient, 'Request completed');
    } catch(e) {
      this.error(res, e);
    }
  }

  @httpPost('')
  public async createPatient(@request() req: Request, @response() res: Response) {
    try {
      const patientData: any = req.body;
      const patient: IPatient = await this.patientService.createPatient(patientData);

      this.success(res, patient, 'Patient registration successful', HttpStatusCode.CREATED);
    } catch(e) {
      this.error(res, e);
    }
  }

  @httpPost('/:id/attachments', uploadFile.single('file'))
  public async uploadAttachment(@request() req: Request, @response() res: Response) {
    try {
      const { id: patientId } = req.params;
      const attachment: IAttachment = await this.patientService.uploadAttachment(patientId, req.file);

      this.success(res, attachment, 'Request completed successfully');
    } catch(e) {
      this.error(res, e);
    }
  }
}