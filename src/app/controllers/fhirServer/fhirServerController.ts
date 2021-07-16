import { Request, Response } from 'express';
import { inject } from 'inversify';
import {
  controller,
  httpDelete,
  httpGet,
  httpPatch,
  httpPost,
  httpPut,
  request,
  response
} from 'inversify-express-utils';
import TYPES from '../../config/types';
import { FhirServerService } from '../../services';
import { BaseController } from '../baseController';

@controller('/fhir')
export class FhirServerController extends BaseController {
  @inject(TYPES.FhirServerService)
  private readonly fhirServerService : FhirServerService;

  @httpGet('*')
  public async fhirResourceGetMethode(@request() req: Request, @response() res: Response) {
    try {
      const [,requestUrl] = req.url.split('fhir');
      const { status: statusCode, headers, data } = await this.fhirServerService.communicate(requestUrl, 'GET');

      this.success(res, data, '', statusCode, headers);
    } catch (e) {
      this.error(res, e);
    }
  }

  @httpPost('*')
  public async fhirResourcePostMethode(@request() req: Request, @response() res: Response) {
    try {
      const [,fullUrl] = req.url.split('fhir');
      const { status: statusCode, headers, data } = await this.fhirServerService.communicate(fullUrl, 'POST', req.body);

      this.success(res, data, '', statusCode, headers);
    } catch (e) {
      this.error(res, e);
    }
  }

  @httpPut('*')
  public async fhirResourcePutMethode(@request() req: Request, @response() res: Response) {
    try {
      const [,fullUrl] = req.url.split('fhir');
      const { status: statusCode, headers, data } = await this.fhirServerService.communicate(fullUrl, 'PUT', req.body);

      this.success(res, data, '', statusCode, headers);
    } catch (e) {
      this.error(res, e);
    }
  }

  @httpPatch('*')
  public async fhirResourcePatchMethode(@request() req: Request, @response() res: Response) {
    try {
      const [,fullUrl] = req.url.split('fhir');
      const { status: statusCode, headers, data } = await this.fhirServerService.communicate(fullUrl, 'PATCH', req.body);

      this.success(res, data, '', statusCode, headers);
    } catch (e) {
      this.error(res, e);
    }
  }

  @httpDelete('*')
  public async fhirResourceDeleteMethode(@request() req: Request, @response() res: Response) {
    try {
      const [,fullUrl] = req.url.split('fhir');
      const { status: statusCode, headers, data } = await this.fhirServerService.communicate(fullUrl, 'DELETE', req.body);

      this.success(res, data, '', statusCode, headers);
    } catch (e) {
      this.error(res, e);
    }
  }
}