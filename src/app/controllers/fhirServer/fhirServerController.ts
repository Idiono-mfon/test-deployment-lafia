import { Method } from 'axios';
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
import { BaseController } from '../baseController';
import { FhirProperties, IFhirServer } from '../../models';
import { error, ITokenUtil, logger, throwError } from '../../utils';

@controller('/fhir')
export class FhirServerController extends BaseController {
  @inject(TYPES.FhirServerService)
  private readonly fhirServerService: IFhirServer;
  @inject(TYPES.TokenUtil)
  private readonly tokenUtil: ITokenUtil;

  private async refreshAccessToken(token: string): Promise<any> {
    logger.info('Running FhirServerController.refreshAccessToken');
    try {
      const { access_token, is_refresh_token_expired } = await this.tokenUtil.refreshAccessToken(token);

      return { access_token, is_refresh_token_expired };
    } catch (e: any) {
      throwError(`Unable to refresh access token: ${e.message}`, error.forbidden);
    }

    return null;
  }

  @httpGet('/Aggregate', TYPES.AuthMiddleware)
  public async getFhirResourceAggregatedData(@request() req: Request, @response() res: Response) {
    logger.info('Running FhirServerController.getFhirResourceAggregatedData');
    try {
      const { user } = res.locals;
      let {
        'x-oauth': token,
        'x-connection-name': connectionName,
        'x-ig': ig,
      } = res.locals?.connection;


      // Refresh access_token if it's expired
      let newToken = await this.refreshAccessToken(token);

      // @ts-ignore
      if (newToken?.access_token) {
        token = newToken?.access_token;
      }

      const props: FhirProperties = {
        token, connectionName, ig,
        patient_id: user.id,
      };
      let resource: any;

      resource = await this.fhirServerService.aggregateFhirData(props);

      // @ts-ignore
      resource = {
        token: {
          access_token: newToken?.access_token,
          is_refresh_token_expired: newToken?.is_refresh_token_expired,
        },
        ...resource
      };

      this.success(res, resource, 'Data aggregated successfully');
    } catch (e: any) {
      logger.error(`${e.message}`, e);
      this.error(res, e);
    }
  }

  @httpGet('*')
  public async fhirResourceGetMethod(@request() req: Request, @response() res: Response) {
    logger.info('Running FhirServerController.fhirResourceGetMethod');
    try {
      let {
        'x-oauth': token,
        'x-connection-name': connectionName,
        'x-ig': ig,
        'x-test-resource': resourceName
      } = res.locals?.connection;

      // Refresh access_token if it's expired
      let accessToken = await this.refreshAccessToken(token);

      // @ts-ignore
      if (accessToken) {
        token = accessToken;
      }

      if (resourceName) {
        const sampleResource = await this.fhirServerService.fetchSampleResources(resourceName);

        return this.success(res, sampleResource, '', 200, { 'Content-Type': 'application/fhir+json' });
      }

      const props: FhirProperties = {
        token,
        connectionName,
        data: req.body,
        ig
      };

      console.log('FHIR_BODY:', req.body);

      const [, requestUrl] = req.url.split('fhir');
      const {
        status: statusCode,
        headers,
        data
      } = await this.fhirServerService.executeQuery(requestUrl, req.method as Method, props);

      this.success(res, data, '', statusCode, headers);
    } catch (e: any) {
      logger.error(`${e.message}`, e);
      this.error(res, e);
    }
  }

  @httpPost('*')
  public async fhirResourcePostMethode(@request() req: Request, @response() res: Response) {
    logger.info('Running FhirServerController.fhirResourcePostMethode');
    try {
      let { 'x-oauth': token, 'x-connection-name': connectionName, ig } = res.locals?.connection;

      // Refresh access_token if it's expired
      let accessToken = await this.refreshAccessToken(token);

      // @ts-ignore
      if (accessToken) {
        token = accessToken;
      }

      const props: FhirProperties = {
        token,
        connectionName,
        data: req.body,
        ig
      }

      const [, requestUrl] = req.url.split('fhir');
      const {
        status: statusCode,
        headers,
        data
      } = await this.fhirServerService.executeQuery(requestUrl, 'POST', props);

      this.success(res, data, '', statusCode, headers);
    } catch (e: any) {
      logger.error(`${e.message}`, e);
      this.error(res, e);
    }
  }

  @httpPut('*')
  public async fhirResourcePutMethode(@request() req: Request, @response() res: Response) {
    logger.info('Running FhirServerController.fhirResourcePutMethode');
    try {
      let {
        'x-oauth': token,
        'x-connection-name': connectionName, ig,
      } = res.locals?.connection;

      // Refresh access_token if it's expired
      let accessToken = await this.refreshAccessToken(token);

      // @ts-ignore
      if (accessToken) {
        token = accessToken;
      }

      const props: FhirProperties = {
        token,
        connectionName,
        data: req.body,
        ig
      }

      const [, requestUrl] = req.url.split('fhir');
      const {
        status: statusCode,
        headers,
        data
      } = await this.fhirServerService.executeQuery(requestUrl, 'PUT', props);

      this.success(res, data, '', statusCode, headers);
    } catch (e: any) {
      logger.error(`${e.message}`, e);
      this.error(res, e);
    }
  }

  @httpPatch('*')
  public async fhirResourcePatchMethode(@request() req: Request, @response() res: Response) {
    logger.info('Running FhirServerController.fhirResourcePatchMethode');
    try {
      let { 'x-oauth': token, 'x-connection-name': connectionName, ig } = res.locals?.connection;

      // Refresh access_token if it's expired
      let accessToken = await this.refreshAccessToken(token);

      // @ts-ignore
      if (accessToken) {
        token = accessToken;
      }

      const props: FhirProperties = {
        token,
        connectionName,
        data: req.body,
        ig
      }

      const [, requestUrl] = req.url.split('fhir');
      const {
        status: statusCode,
        headers,
        data
      } = await this.fhirServerService.executeQuery(requestUrl, 'PATCH', props);

      this.success(res, data, '', statusCode, headers);
    } catch (e: any) {
      logger.error(`${e.message}`, e);
      this.error(res, e);
    }
  }

  @httpDelete('*')
  public async fhirResourceDeleteMethode(@request() req: Request, @response() res: Response) {
    logger.info('Running FhirServerController.fhirResourceDeleteMethode');
    try {
      let { 'x-oauth': token, 'x-connection-name': connectionName, ig } = res.locals?.connection;

      // Refresh access_token if it's expired
      let accessToken = await this.refreshAccessToken(token);

      // @ts-ignore
      if (accessToken) {
        token = accessToken;
      }

      const props: FhirProperties = {
        token,
        connectionName,
        data: req.body,
        ig
      }

      const [, requestUrl] = req.url.split('fhir');
      const {
        status: statusCode,
        headers,
        data
      } = await this.fhirServerService.executeQuery(requestUrl, 'DELETE', props);

      this.success(res, data, '', statusCode, headers);
    } catch (e: any) {
      logger.error(`${e.message}`, e);
      this.error(res, e);
    }
  }
}
