import { inject } from 'inversify';
import { Request, Response } from 'express';
import { controller, httpDelete, httpGet, httpPost, httpPut, request, response} from 'inversify-express-utils';
import TYPES from '../../config/types';
import { ImplementationGuideService } from '../../services';

import { BaseController } from '../baseController';
import { IFhirResourceImplementationGuide, IFindImplementationGuide, IImplementationGuide } from '../../models';

@controller('/implementation-guide')
export class ImplementationGuideController extends BaseController {
  @inject(TYPES.ImplementationGuideService)
  private readonly implementationGuideService: ImplementationGuideService;

  @httpGet('')
  public async fetchImplementationGuides(@request() req: Request, @response() res: Response) {
    try {
      const implementationGuide = await this.implementationGuideService.fetchImplementationGuide();
      this.success(res, implementationGuide, 'implementation guides successfully fetched');
    } catch (e: any) {
      this.error(res, e);
    }
  }

  @httpGet('/:id')
  public async fetchImplementationGuide(@request() req: Request, @response() res: Response) {
    try {
      const { id: implementationGuide } = req.params;
      const find: IFindImplementationGuide = {id: implementationGuide};
      const resp = await this.implementationGuideService.getOneImplementationGuide(find);
      this.success(res, resp, 'fimplementation guide successfully fetched');
    } catch (e: any) {
      this.error(res, e);
    }
  }

  @httpPost('')
  public async createImplementationGuide(@request() req: Request, @response() res: Response) {
    try {
      const implementationGuide: IImplementationGuide = req.body;
      const resp = await this.implementationGuideService.saveImplementationGuide(implementationGuide);
      this.success(res, resp, 'implementation guide successfully added');
    } catch (e: any) {
      this.error(res, e);
    }
  }

  @httpPost('/fhir-resource')
  public async attachFhirResource(@request() req: Request, @response() res: Response) {
    try {
      const fhirResourceImplementationGuide: IFhirResourceImplementationGuide = req.body;
      const resp = await this.implementationGuideService.attachFhirResource(fhirResourceImplementationGuide.fr_id, fhirResourceImplementationGuide.ig_id);
      this.success(res, resp, 'fhir resource successfully added to implementation guide');
    } catch (e: any) {
      this.error(res, e);
    }
  }

  @httpPut('/:id')
  public async updateFhirResource(@request() req: Request, @response() res: Response) {
    try {
      const { id } = req.params;
      const implementationGuide: IImplementationGuide = req.body;
      const resp = await this.implementationGuideService.updateImplementationGuide(id, implementationGuide);
      this.success(res, resp, 'implementation guide successfully updated');
    } catch (e: any) {
      this.error(res, e);
    }
  }

  @httpDelete('/fhir-resource')
  public async detachIG(@request() req: Request, @response() res: Response) {
    try {
      const fhirResourceImplementationGuide: IFhirResourceImplementationGuide = req.body;
      const resp = await this.implementationGuideService.detachFRFromIG(fhirResourceImplementationGuide.fr_id, fhirResourceImplementationGuide.ig_id);
      this.success(res, resp, 'implementation guide successfully removed to implementation guide');
    } catch (e: any) {
      this.error(res, e);
    }
  }

  @httpDelete('/:id')
  public async deleteIG(@request() req: Request, @response() res: Response) {
    try {
      const { id } = req.params;
      const resp = await this.implementationGuideService.deleteImplementationGuide(id);
      this.success(res, resp, 'implementation guide successfully updated');
    } catch (e: any) {
      this.error(res, e);
    }
  }
}
