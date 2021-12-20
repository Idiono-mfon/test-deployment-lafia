import { Request, Response } from 'express';
import { inject } from 'inversify';
import { controller, httpGet, httpPost, request, response } from 'inversify-express-utils';
import TYPES from '../../config/types';
import { IFhirServer } from '../../models';
import { IUserService } from '../../services';
import { BaseController } from '../baseController';
import { error, logger, throwError } from '../../utils';

@controller('/consents')
export class ConsentController extends BaseController {
  @inject(TYPES.UserService)
  private readonly userService: IUserService;
  @inject(TYPES.FhirServerService)
  private readonly fhirServerService: IFhirServer;

  @httpPost('/accept')
  public async acceptConsent(@request() req: Request, @response() res: Response) {
    logger.info('Running ConsentController.acceptConsent');
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

  @httpGet('/:user_id')
  public async getAllConsent(@request() req: Request, @response() res: Response) {
    logger.info('Running ConsentController.getAllConsent');
    try {
      const { user_id } = req.params;
      let { resource_type } = req.query;

      if (!resource_type) {
        throwError('resource_type field is required', error.badRequest);
      }

      const userDetails = await this.userService.findOne({ resource_id: user_id });

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
