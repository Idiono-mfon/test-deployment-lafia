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
      const [,fullUrl] = req.url.split('fhir');
      const { status: code, headers, data } = await this.fhirServerService.communicate(fullUrl, 'GET');

      delete headers['transfer-encoding'];
      headers['x-powered-by'] = 'LAFIA FHIR 5.4.0 REST Server (FHIR Server; FHIR 4.0.1/R4)';

      res.set(headers).status(code).json(data);
    } catch (e) {
      const { status: code, headers, data } = e.code;

      delete headers['transfer-encoding'];
      headers['x-powered-by'] = 'LAFIA FHIR 5.4.0 REST Server (FHIR Server; FHIR 4.0.1/R4)';
      res.set(headers).status(code).json(data);
    }
  }

  @httpPost('*')
  public async fhirResourcePostMethode(@request() req: Request, @response() res: Response) {
    try {
      const [,fullUrl] = req.url.split('fhir');
      const { status: code, headers, data } = await this.fhirServerService.communicate(fullUrl, 'POST');

      delete headers['transfer-encoding'];
      headers['x-powered-by'] = 'LAFIA FHIR 5.4.0 REST Server (FHIR Server; FHIR 4.0.1/R4)';

      res.set(headers).status(code).json(data);
    } catch (e) {
      const { status: code, headers, data } = e.code;

      delete headers['transfer-encoding'];
      headers['x-powered-by'] = 'LAFIA FHIR 5.4.0 REST Server (FHIR Server; FHIR 4.0.1/R4)';
      res.set(headers).status(code).json(data);
    }
  }

  @httpPut('*')
  public async fhirResourcePutMethode(@request() req: Request, @response() res: Response) {
    try {
      const [,fullUrl] = req.url.split('fhir');
      const { status: code, headers, data } = await this.fhirServerService.communicate(fullUrl, 'PUT');

      delete headers['transfer-encoding'];
      headers['x-powered-by'] = 'LAFIA FHIR 5.4.0 REST Server (FHIR Server; FHIR 4.0.1/R4)';

      res.set(headers).status(code).json(data);
    } catch (e) {
      const { status: code, headers, data } = e.code;

      delete headers['transfer-encoding'];
      headers['x-powered-by'] = 'LAFIA FHIR 5.4.0 REST Server (FHIR Server; FHIR 4.0.1/R4)';
      res.set(headers).status(code).json(data);
    }
  }

  @httpPatch('*')
  public async fhirResourcePatchMethode(@request() req: Request, @response() res: Response) {
    try {
      const [,fullUrl] = req.url.split('fhir');
      const { status: code, headers, data } = await this.fhirServerService.communicate(fullUrl, 'PATCH');

      delete headers['transfer-encoding'];
      headers['x-powered-by'] = 'LAFIA FHIR 5.4.0 REST Server (FHIR Server; FHIR 4.0.1/R4)';

      res.set(headers).status(code).json(data);
    } catch (e) {
      const { status: code, headers, data } = e.code;

      delete headers['transfer-encoding'];
      headers['x-powered-by'] = 'LAFIA FHIR 5.4.0 REST Server (FHIR Server; FHIR 4.0.1/R4)';
      res.set(headers).status(code).json(data);
    }
  }

  @httpDelete('*')
  public async fhirResourceDeleteMethode(@request() req: Request, @response() res: Response) {
    try {
      const [,fullUrl] = req.url.split('fhir');
      const { status: code, headers, data } = await this.fhirServerService.communicate(fullUrl, 'DELETE');

      delete headers['transfer-encoding'];
      headers['x-powered-by'] = 'LAFIA FHIR 5.4.0 REST Server (FHIR Server; FHIR 4.0.1/R4)';

      res.set(headers).status(code).json(data);
    } catch (e) {
      const { status: code, headers, data } = e.code;

      delete headers['transfer-encoding'];
      headers['x-powered-by'] = 'LAFIA FHIR 5.4.0 REST Server (FHIR Server; FHIR 4.0.1/R4)';
      res.set(headers).status(code).json(data);
    }
  }
}