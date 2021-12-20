import { inject } from 'inversify';
import { Request, Response } from 'express';
import { controller, httpDelete, httpGet, httpPost, httpPut, request, response } from 'inversify-express-utils';
import TYPES from '../../config/types';
import { IImplementationGuideService } from '../../services';
import { logger } from '../../utils';

import { BaseController } from '../baseController';
import { IFhirResourceImplementationGuide, IFindImplementationGuide, IImplementationGuide } from '../../models';

@controller('/implementation-guide')
export class ImplementationGuideController extends BaseController {
  @inject(TYPES.ImplementationGuideService)
  private readonly implementationGuideService: IImplementationGuideService;

  @httpGet('')
  public async fetchImplementationGuides(@request() req: Request, @response() res: Response) {
    logger.info('Running ImplementationGuideController.fetchImplementationGuides');
    try {
      const { slug } = req.query;
      let implementationGuide: IFindImplementationGuide | IFindImplementationGuide[] | undefined;

      if (slug) {
        implementationGuide = await this.implementationGuideService.findOne({ slug: slug as string });
      } else {
        implementationGuide = await this.implementationGuideService.findAll();
      }

      return this.success(res, implementationGuide, 'implementation guides successfully fetched');
    } catch (e: any) {
      logger.error(`Unable to fetch implementation guide -`, e);
      this.error(res, e);
    }
  }

  @httpGet('/:id')
  public async fetchImplementationGuide(@request() req: Request, @response() res: Response) {
    logger.info('Running ImplementationGuideController.findAll');
    try {
      const { id: implementationGuide } = req.params;
      const find: IFindImplementationGuide = { id: implementationGuide };
      const resp = await this.implementationGuideService.findOne(find);
      this.success(res, resp, 'implementation guide successfully fetched');
    } catch (e: any) {
      logger.error(`Unable to fetch implementation guide with id - ${req?.params?.id} -`, e);
      this.error(res, e);
    }
  }

  @httpPost('')
  public async createImplementationGuide(@request() req: Request, @response() res: Response) {
    logger.info('Running ImplementationGuideController.create');
    try {
      const implementationGuide: IImplementationGuide = req.body;
      const resp = await this.implementationGuideService.create(implementationGuide);
      this.success(res, resp, 'implementation guide successfully added');
    } catch (e: any) {
      logger.error(`Unable to create implementation guide -`, e);
      this.error(res, e);
    }
  }

  @httpPost('/fhir-resource')
  public async attachFhirResource(@request() req: Request, @response() res: Response) {
    logger.info('Running ImplementationGuideController.attachFhirResource');
    try {
      const fhirResourceImplementationGuide: IFhirResourceImplementationGuide = req.body;
      const resp = await this.implementationGuideService.attachFhirResource(fhirResourceImplementationGuide.fr_id, fhirResourceImplementationGuide.ig_id);
      this.success(res, resp, 'fhir resource successfully added to implementation guide');
    } catch (e: any) {
      logger.error(`Unable to attach fhir resource to implementation guide -`, e);
      this.error(res, e);
    }
  }

  @httpPut('/:id')
  public async updateFhirResource(@request() req: Request, @response() res: Response) {
    logger.info('Running ImplementationGuideController.update');
    try {
      const { id } = req.params;
      const implementationGuide: IImplementationGuide = req.body;
      const resp = await this.implementationGuideService.update(id, implementationGuide);
      this.success(res, resp, 'implementation guide successfully updated');
    } catch (e: any) {
      logger.error(`Unable to update fhir resource -`, e);
      this.error(res, e);
    }
  }

  @httpDelete('/fhir-resource')
  public async detachIG(@request() req: Request, @response() res: Response) {
    logger.info('Running ImplementationGuideController.detachIG');
    try {
      const fhirResourceImplementationGuide: IFhirResourceImplementationGuide = req.body;
      const resp = await this.implementationGuideService.detachFRFromIG(fhirResourceImplementationGuide.fr_id, fhirResourceImplementationGuide.ig_id);
      this.success(res, resp, 'implementation guide successfully removed to implementation guide');
    } catch (e: any) {
      logger.error(`Unable to detach fhir resource from implementation guide -`, e);
      this.error(res, e);
    }
  }

  @httpDelete('/:id')
  public async deleteIG(@request() req: Request, @response() res: Response) {
    logger.info('Running ImplementationGuideController.deleteIG');
    try {
      const { id } = req.params;
      const resp = await this.implementationGuideService.delete(id);
      this.success(res, resp, 'implementation guide successfully updated');
    } catch (e: any) {
      logger.error(`Unable to delete implementation guide -`, e);
      this.error(res, e);
    }
  }
}
