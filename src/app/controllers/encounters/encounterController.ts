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
import { IEncounterService } from '../../services';
import { HttpStatusCode, ICsvImporter, IFhirImporter, logger } from '../../utils';
import { BaseController } from '../baseController';

@controller('/encounters')
export class EncounterController extends BaseController {
  @inject(TYPES.EncounterService)
  private readonly encounterService: IEncounterService;

  
}