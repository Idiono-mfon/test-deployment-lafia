import { Request, Response } from 'express';
import { inject } from 'inversify';
import { controller, httpGet, httpPost, httpPut, request, response } from 'inversify-express-utils';
import TYPES from '../../config/types';
import { ConsentService, UserService } from '../../services';
import { error, throwError } from '../../utils';
import { BaseController } from '../baseController';

@controller('/consents')
export class ConsentController extends BaseController {
  @inject(TYPES.ConsentService)
  private readonly consentService: ConsentService;
  @inject(TYPES.UserService)
  private readonly userService: UserService;

  @httpPost('/accept')
  public async acceptConsent(@request() req: Request, @response() res: Response) {
    try {
      const { patient_id, practitioner_id, consent_type } = req.body;

      const patientDetails = await this.userService.getOneUser({
        resource_type: 'patient',
        resource_id: patient_id,
      });
      const practitionerDetails = await this.userService.getOneUser({
        resource_type: 'practitioner',
        resource_id: practitioner_id,
      });

      if (!patientDetails) {
        throwError('Patient with the id not found', error.notFound);
      }

      const consentInfo: any = {
        date: new Date(),
        patient_email: patientDetails?.email,
        patient_name: `${patientDetails.firstName} ${patientDetails.lastName}`
      };
      let granteeUserName;
      if (practitionerDetails) {
        granteeUserName = `${practitionerDetails?.firstName} ${practitionerDetails?.lastName}`;
        consentInfo.practitioner_email = practitionerDetails?.email;
      }

      const processedConsent = await this.consentService.processNewConsent(patientDetails?.email, {
        consentInfo,
        granteeUserName,
        consentType: consent_type,
      });

      this.success(res, processedConsent, 'Consent successfully accepted');
    } catch (e) {
      this.error(res, e);
    }
  }

  @httpPut('/type')
  public async addConsentCategory(@request() req: Request, @response() res: Response) {
    try {
      const { consent_type, patient_id } = req.body;

      const patientDetails = await this.userService.getOneUser({
        resource_type: 'patient',
        resource_id: patient_id,
      });

      if (!patientDetails) {
        throwError('Patient with the id not found', error.notFound);
      }

      await this.consentService.addConsentCategory(patientDetails?.email, consent_type);

      this.success(res, {}, 'Consent category added successfully');
    } catch (e) {
      this.error(res, e);
    }
  }

  @httpGet('/:user_id')
  public async getAllConsent(@request() req: Request, @response() res: Response) {
    try {
      const { user_id } = req.params;

      const userDetails = await this.userService.getOneUser({ resource_id: user_id });

      if (!userDetails) {
        throwError('User with the id not found', error.notFound);
      }

      const consents = await this.consentService.getAllConsent(userDetails?.email);

      this.success(res, consents, 'Consents retrieved successfully');
    } catch (e) {
      this.error(res, e);
    }
  }
}