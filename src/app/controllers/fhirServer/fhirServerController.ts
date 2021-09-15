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
import { FhirProperties, FhirServerService } from '../../services';
import { BaseController } from '../baseController';

@controller('/fhir')
export class FhirServerController extends BaseController {
  @inject(TYPES.FhirServerService)
  private readonly fhirServerService: FhirServerService;

  @httpGet('*')
  public async fhirResourceGetMethode(@request() req: Request, @response() res: Response) {
    try {
      const { 'x-oauth': token, 'x-connection-name': connectionName } = res.locals?.connection;
      const props: FhirProperties = {
        token,
        connectionName,
        data: req.body,
      }

      const [, requestUrl] = req.url.split('fhir');
      const {
        status: statusCode,
        headers,
        data
      } = await this.fhirServerService.executeQuery(requestUrl, 'GET', props);

      this.success(res, data, '', statusCode, headers);
    } catch (e: any) {
      this.error(res, e);
    }
  }

  @httpPost('*')
  public async fhirResourcePostMethode(@request() req: Request, @response() res: Response) {
    try {
      const { 'x-oauth': token, 'x-connection-name': connectionName } = res.locals?.connection;
      const props: FhirProperties = {
        token,
        connectionName,
        data: req.body,
      }

      const [, requestUrl] = req.url.split('fhir');
      const {
        status: statusCode,
        headers,
        data
      } = await this.fhirServerService.executeQuery(requestUrl, 'POST', props);

      this.success(res, data, '', statusCode, headers);
    } catch (e: any) {
      this.error(res, e);
    }
  }

  @httpPut('*')
  public async fhirResourcePutMethode(@request() req: Request, @response() res: Response) {
    try {
      const { 'x-oauth': token, 'x-connection-name': connectionName } = res.locals?.connection;
      const props: FhirProperties = {
        token,
        connectionName,
        data: req.body,
      }

      const [, requestUrl] = req.url.split('fhir');
      const {
        status: statusCode,
        headers,
        data
      } = await this.fhirServerService.executeQuery(requestUrl, 'PUT', props);

      this.success(res, data, '', statusCode, headers);
    } catch (e: any) {
      this.error(res, e);
    }
  }

  @httpPatch('*')
  public async fhirResourcePatchMethode(@request() req: Request, @response() res: Response) {
    try {
      const { 'x-oauth': token, 'x-connection-name': connectionName } = res.locals?.connection;
      const props: FhirProperties = {
        token,
        connectionName,
        data: req.body,
      }

      const [, requestUrl] = req.url.split('fhir');
      const {
        status: statusCode,
        headers,
        data
      } = await this.fhirServerService.executeQuery(requestUrl, 'PATCH', props);

      this.success(res, data, '', statusCode, headers);
    } catch (e: any) {
      this.error(res, e);
    }
  }

  @httpDelete('*')
  public async fhirResourceDeleteMethode(@request() req: Request, @response() res: Response) {
    try {
      const { 'x-oauth': token, 'x-connection-name': connectionName } = res.locals?.connection;
      const props: FhirProperties = {
        token,
        connectionName,
        data: req.body,
      }

      const [, requestUrl] = req.url.split('fhir');
      const {
        status: statusCode,
        headers,
        data
      } = await this.fhirServerService.executeQuery(requestUrl, 'DELETE', props);

      this.success(res, data, '', statusCode, headers);
    } catch (e: any) {
      this.error(res, e);
    }
  }
}
