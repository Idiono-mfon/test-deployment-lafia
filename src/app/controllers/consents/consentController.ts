import { Request, Response } from 'express';
import { inject } from 'inversify';
import { controller, httpGet, httpPost, httpPut, request, response } from 'inversify-express-utils';
import TYPES from '../../config/types';
import { ConsentService, FhirServerService, UserService } from '../../services';
import { error, logger, throwError } from '../../utils';
import { BaseController } from '../baseController';

@controller('/consents')
export class ConsentController extends BaseController {
  @inject(TYPES.ConsentService)
  private readonly consentService: ConsentService;
  @inject(TYPES.UserService)
  private readonly userService: UserService;
  @inject(TYPES.FhirServerService)
  private readonly fhirServerService: FhirServerService;

  @httpPost('/accept')
  public async acceptConsent(@request() req: Request, @response() res: Response) {
    logger.info('Running ConsentController::acceptConsent');
    try {
      if (req.body?.resourceType !== 'Consent') {
        throwError('Invalid FHIR Consent Resource Received!', error.badRequest);
      }

      const consentRecord = await this.fhirServerService.executeQuery(
        `/Consent`,
        'POST',
        { data: req.body }
      );

      this.success(res, consentRecord?.data, 'Consent successfully accepted');
    } catch (e: any) {
      logger.error(`Unable to accept consent -`, e);
      this.error(res, e);
    }
  }

  @httpPut('/type')
  public async addConsentCategory(@request() req: Request, @response() res: Response) {
    logger.info('Running ConsentController::addConsentCategory');
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
    } catch (e: any) {
      logger.error(`Unable to add consent category -`, e);
      this.error(res, e);
    }
  }

  @httpGet('/:user_id')
  public async getAllConsent(@request() req: Request, @response() res: Response) {
    logger.info('Running ConsentController::getAllConsent');
    try {
      const { user_id } = req.params;
      let { resource_type } = req.query;

      if (!resource_type) {
        throwError('resource_type field is required', error.badRequest);
      }

      const userDetails = await this.userService.getOneUser({ resource_id: user_id });

      if (!userDetails) {
        throwError('User with the id not found', error.notFound);
      }

      resource_type = resource_type as string;
      resource_type = resource_type?.toLowerCase() === 'patient' ? 'Patient' : 'Practitioner';

      const consents = await this.fhirServerService.executeQuery(
        `/Consent?consentor=${resource_type}/${user_id}`,
        'GET',
      );

      this.success(res, consents?.data, 'Consents retrieved successfully');
    } catch (e: any) {
      logger.error(`Unable to retrieve consents -`, e);
      this.error(res, e);
    }
  }
}
