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
import { IAttachment, IPatient, IPatientWithToken } from '../../models';
import { PatientService } from '../../services';
import {
  MessageBroker,
  rmqSuccessResponse
} from '../../services/messageBroker';
import { HttpStatusCode } from '../../utils';
import { BaseController } from '../baseController';

@controller('/patients')
export class PatientController extends BaseController {
  @inject(TYPES.PatientService)
  private readonly patientService: PatientService;

  @inject(TYPES.MessageBroker)
  private readonly messageBroker: MessageBroker;

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

      const patient: IPatientWithToken = await this.patientService.createPatient(patientData);
      const rmqData = {
        data: patientData,
        resource_type: patient?.user?.resourceType as string
      }
      const rmqPubMsg = rmqSuccessResponse(
        rmqData,
        patient?.user?.id as string,
        'Resource created successfully'
      );
      await this.messageBroker.rmqPublish(JSON.stringify(rmqPubMsg));

      this.success(res, patient, 'Patient registration successful', HttpStatusCode.CREATED);
    } catch(e) {
      this.error(res, e);
    }
  }

  @httpPost('/:id/attachments', uploadFile.single('file'))
  public async uploadAttachment(@request() req: Request, @response() res: Response) {
    try {
      const { id: patientId } = req.params;
      const { file } = req;

      const attachment: IAttachment = await this.patientService.uploadAttachment(patientId, file!);

      this.success(res, attachment, 'Request completed successfully');
    } catch(e) {
      this.error(res, e);
    }
  }
}
