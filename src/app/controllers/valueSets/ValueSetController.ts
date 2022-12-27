import { Request, Response } from 'express';
import { inject } from 'inversify';
import { controller, httpGet, httpPut, httpPost, response, request } from 'inversify-express-utils';
import TYPES from '../../config/types';
import { IValueSetConceptService, IValueSetService } from '../../services';
import { HttpStatusCode, logger } from '../../utils';
import { BaseController } from '../baseController';
import { validationMiddleware } from '../../middlewares/validation.middleware';
import { CreateValueSetDto, CreateValueSetConceptDto } from './dto';

@controller('/valuesets')
export class ValueSetController extends BaseController {
  @inject(TYPES.ValueSetService)
  private readonly valueSetService: IValueSetService;

  @inject(TYPES.ValueSetConceptService)
  private readonly valueSetConceptService: IValueSetConceptService;

  @httpPost('/create', validationMiddleware(CreateValueSetDto))
  public async createValueSet(@request() req: Request, @response() res: Response) {
    logger.info('Running ValueSetController.createValueSet');
    try {
      const valueSet = await this.valueSetService.create(req.body);

      this.success(res, valueSet, 'ValueSet created', HttpStatusCode.CREATED);
    } catch (e: any) {
      logger.error(`Unable to create valueSet -`, e);
      this.error(res, e);
    }
  }

  @httpPost('/add-concepts', validationMiddleware(CreateValueSetConceptDto))
  public async addValueSetConcept(@request() req: Request, @response() res: Response) {
    logger.info('Running ValueSetController.addValueSetConcept');
    try {
      const valueSetConcept = await this.valueSetConceptService.create(req.body);

      this.success(res, true, 'ValueSet concepts added', HttpStatusCode.CREATED);
    } catch (e: any) {
      logger.error(`Unable to add ValueSet concepts -`, e);
      this.error(res, e);
    }
  }
}
