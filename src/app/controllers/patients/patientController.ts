import { Request, Response } from 'express';
import { inject } from 'inversify';
import {
  controller,
  httpPost,
  response,
  request
} from 'inversify-express-utils';
import TYPES from '../../config/types';
import { PatientService } from '../../services';
import { HttpStatusCode } from '../../utils';
import { BaseController } from '../baseController';

@controller('/patients')
export class PatientController extends BaseController {
  @inject(TYPES.PatientService)
  private readonly patientService: PatientService;

  @httpPost('')
  public async registerPatient(@request() req: Request, @response() res: Response) {
    try {
      console.log('Hello Patient')
      const patient = await this.patientService.registerPatient(req.body);

      this.success(res, patient, 'Patient registration successful', HttpStatusCode.CREATED);
    } catch (e) {
      this.error(res, e.code, e.message);
    }
  }
}
