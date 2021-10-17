import { inject } from 'inversify';
import { Request, Response } from 'express';
import { controller, httpDelete, httpGet, httpPost, httpPut, request, response } from 'inversify-express-utils';
import TYPES from '../../config/types';
import { FhirResourceService } from '../../services';
import { logger } from '../../utils';
import { BaseController } from '../baseController';
import { IFhirResource, IFhirResourceImplementationGuide, IFindFhirResource } from '../../models';

@controller('/fhir-resource')
export class FhirResourceController extends BaseController {
  @inject(TYPES.FhirResourceService)
  private readonly fhirResourceService: FhirResourceService;

  @httpGet('')
  public async fetchFhirResources(@request() req: Request, @response() res: Response) {
    logger.info('Running FhirResourceController::fetchFhirResources');
    try {
      const fhirResources = await this.fhirResourceService.fetchFhirResources();
      this.success(res, fhirResources, 'fhir resources successfully fetched');
    } catch (e: any) {
      logger.error(`Unable to fetch fhir resources -`, e);
      this.error(res, e);
    }
  }

  @httpGet('/:id')
  public async fetchFhirResource(@request() req: Request, @response() res: Response) {
    logger.info('Running FhirResourceController::fetchFhirResource');
    try {
      const { id: fhirResourceId } = req.params;
      const find: IFindFhirResource = {id: fhirResourceId};
      const fhirResource = await this.fhirResourceService.getOneFhirResource(find);
      this.success(res, fhirResource, 'fhir resource successfully fetched');
    } catch (e: any) {
      logger.error(`Unable to fetch fhir resource with id - ${req?.params?.id} -`, e);
      this.error(res, e);
    }
  }

  @httpPost('')
  public async createFhirResources(@request() req: Request, @response() res: Response) {
    logger.info('Running FhirResourceController::createFhirResources');
    try {
      const fhirResource: IFhirResource = req.body;
      const resp = await this.fhirResourceService.saveFhirResources(fhirResource);
      this.success(res, resp, 'fhir resource successfully added');
    } catch (e: any) {
      logger.error(`Unable to create fhir resource -`, e);
      this.error(res, e);
    }
  }

  @httpPost('/implementation-guide')
  public async attachImplementationGuide(@request() req: Request, @response() res: Response) {
    logger.info('Running FhirResourceController::attachImplementationGuide');
    try {
      const fhirResourceImplementationGuide: IFhirResourceImplementationGuide = req.body;
      const resp = await this.fhirResourceService.attachImplementationGuide(fhirResourceImplementationGuide.fr_id, fhirResourceImplementationGuide.ig_id);
      this.success(res, resp, 'implementation guide successfully added to fhir resource');
    } catch (e: any) {
      logger.error(`Unable to attach implementation guide to fhir resource -`, e);
      this.error(res, e);
    }
  }

  @httpPut('/:id')
  public async updateFhirResource(@request() req: Request, @response() res: Response) {
    logger.info('Running FhirResourceController::updateFhirResource');
    try {
      const { id } = req.params;
      const fhirResource: IFhirResource = req.body;
      const resp = await this.fhirResourceService.updateFhirResource(id, fhirResource);
      this.success(res, resp, 'fhir resource successfully updated');
    } catch (e: any) {
      logger.error(`Unable to fhir resource with id - ${req?.params?.id} -`, e);
      this.error(res, e);
    }
  }

  @httpDelete('/implementation-guide')
  public async detachIG(@request() req: Request, @response() res: Response) {
    logger.info('Running FhirResourceController::detachIG');
    try {
      const fhirResourceImplementationGuide: IFhirResourceImplementationGuide = req.body;
      const resp = await this.fhirResourceService.detachIGFromFR(fhirResourceImplementationGuide.fr_id, fhirResourceImplementationGuide.ig_id);
      this.success(res, resp, 'implementation guide successfully removed to fhir resource');
    } catch (e: any) {
      logger.error(`Unable to detach implementation guide - from fhir resource -`, e);
      this.error(res, e);
    }
  }

  @httpDelete('/:id')
  public async deleteFR(@request() req: Request, @response() res: Response) {
    logger.info('Running FhirResourceController::deleteFR');
    try {
      const { id } = req.params;
      const resp = await this.fhirResourceService.deleteFhirResource(id);
      this.success(res, resp, 'fhir resource successfully updated');
    } catch (e: any) {
      logger.error(`Unable to detach fhir resource with id - ${req?.params?.id} - from implementation guide -`, e);
      this.error(res, e);
    }
  }

}
