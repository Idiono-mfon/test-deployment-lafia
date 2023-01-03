import { Request, Response } from 'express';
import { inject } from 'inversify';
import { controller, httpGet, httpPut, httpPost, response, request } from 'inversify-express-utils';
import TYPES from '../../config/types';
import { IAgreementService, LafiaAgreementNames } from '../../services';
import { HttpStatusCode, logger } from '../../utils';
import { BaseController } from '../baseController';
import { validationMiddleware } from '../../middlewares';
import { CreateAgreementDto, UpdateAgreementDto } from './dto';

@controller('/agreements')
export class AgreementController extends BaseController {
  @inject(TYPES.AgreementService)
  private readonly agreementService: IAgreementService;

  @httpPost('/create', validationMiddleware(CreateAgreementDto))
  public async createAgreement(@request() req: Request, @response() res: Response) {
    logger.info('Running AgreementController.createAgreement');
    try {
      const valueSet = await this.agreementService.create(req.body);

      this.success(res, valueSet, 'Agreement created', HttpStatusCode.CREATED);
    } catch (e: any) {
      logger.error(`Unable to create Agreement -`, e);
      this.error(res, e);
    }
  }

  @httpGet('/service-agreements')
  public async termsAndConditions(@request() req: Request, @response() res: Response) {
    logger.info('Running AgreementController.termsAndConditions');
    try {
      const agreement = await this.agreementService.findOne({
        name: LafiaAgreementNames.termsAndConditions,
      });

      this.success(res, agreement, 'Service agreements fetched', HttpStatusCode.OK);
    } catch (e: any) {
      logger.error(
        `Unable to Service agreements with name ${LafiaAgreementNames.termsAndConditions} -`,
        e
      );
      this.error(res, e);
    }
  }

  @httpPut('/:id', validationMiddleware(UpdateAgreementDto))
  public async updateAgreement(@request() req: Request, @response() res: Response) {
    logger.info('Running AgreementController.updateAgreement');
    try {
      const { id } = req.params;

      const agreement = await this.agreementService.update(id, req.body);

      this.success(res, agreement, 'Agreement updated', HttpStatusCode.CREATED);
    } catch (e: any) {
      logger.error(`Unable to update user -`, e);
      this.error(res, e);
    }
  }
}
