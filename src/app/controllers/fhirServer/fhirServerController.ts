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
import { AuthService, FhirProperties, FhirServerService } from '../../services';
import { error, throwError, TokenUtil } from '../../utils';
import { BaseController } from '../baseController';

@controller('/fhir')
export class FhirServerController extends BaseController {
  @inject(TYPES.FhirServerService)
  private readonly fhirServerService: FhirServerService;
  @inject(TYPES.AuthService)
  private readonly authService: AuthService;
  @inject(TYPES.TokenUtil)
  private readonly tokenUtil: TokenUtil;

  @httpGet('/Aggregate', TYPES.AuthMiddleware)
  public async getFhirResourceAggregatedData(@request() req: Request, @response() res: Response) {
    try {
      const { user } = res.locals;
      let {
        'x-oauth': token,
        'x-connection-name': connectionName,
        'x-ig': ig,
      } = res.locals?.connection;


      // Refresh access_token if it's expired
      const isTokenExpired = this.tokenUtil.isTokenExpired(token);
      let accessToken: string;

      if (isTokenExpired) {
        try {
          const connection = await this.authService.getConnectionByFields({ access_token: token });

          if (!connection) {
            throwError('Could not verify connection with the access token', error.forbidden)
          }

          const { access_token } = await this.tokenUtil.refresh(connection.refreshToken!);

          accessToken = access_token;
        } catch (e) {
          throwError('Could not refresh access token', error.forbidden);
        }
      }

      // @ts-ignore
      if (accessToken) {
        token = accessToken;
      }

      const props: FhirProperties = {
        token, connectionName, ig,
        patient_id: user.id,
      };
      let resource: any;

      resource = await this.fhirServerService.aggregateFhirData(props);

      // @ts-ignore
      resource = accessToken ? { access_token: accessToken, ...resource } : { ...resource };

      this.success(res, resource, 'Data aggregated successfully');
    } catch (e: any) {
      this.error(res, e);
    }
  }

  @httpGet('*')
  public async fhirResourceGetMethode(@request() req: Request, @response() res: Response) {
    try {
      const {
        'x-oauth': token,
        'x-connection-name': connectionName,
        'x-ig': ig,
        'x-test-resource': resourceName
      } = res.locals?.connection;

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
      const { 'x-oauth': token, 'x-connection-name': connectionName, ig } = res.locals?.connection;
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
      this.error(res, e);
    }
  }

  @httpPut('*')
  public async fhirResourcePutMethode(@request() req: Request, @response() res: Response) {
    try {
      const { 'x-oauth': token, 'x-connection-name': connectionName, ig } = res.locals?.connection;
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
      this.error(res, e);
    }
  }

  @httpPatch('*')
  public async fhirResourcePatchMethode(@request() req: Request, @response() res: Response) {
    try {
      const { 'x-oauth': token, 'x-connection-name': connectionName, ig } = res.locals?.connection;
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
      this.error(res, e);
    }
  }

  @httpDelete('*')
  public async fhirResourceDeleteMethode(@request() req: Request, @response() res: Response) {
    try {
      const { 'x-oauth': token, 'x-connection-name': connectionName, ig } = res.locals?.connection;
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
      this.error(res, e);
    }
  }
}
