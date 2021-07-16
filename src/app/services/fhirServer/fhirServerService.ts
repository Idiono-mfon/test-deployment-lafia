import { injectable } from 'inversify';
import axios, { Method } from 'axios';
import { Env } from '../../config/env';
import { IFhirServer } from '../../models';
import { GenericResponseError } from '../../utils';

const axiosInstance = axios.create({
  baseURL: `${Env.all().fhir_server_base_url}/`,
  headers : {
      'Content-Type': 'application/json'
  }
});

axiosInstance.interceptors.request.use((config) => {
  config.params = config.params || {};
  config.params._format = 'json';
  return config;
});

@injectable()
export class FhirServerService implements IFhirServer {

  public async communicate(resourceQuery: string, httpMethod: Method, data?: any): Promise<any> {
    try {
      const { status, data: responseData, headers } = await axiosInstance({
        url: resourceQuery,
        method: httpMethod,
        data,
      });

      delete headers['transfer-encoding'];
      headers['x-powered-by'] = 'LAFIA FHIR 5.4.0 REST Server (FHIR Server; FHIR 4.0.1/R4)';

      return {
        status,
        headers,
        data: responseData,
      };
    } catch (e) {
      throw new GenericResponseError(e.message, e.response);
    }
  }
}
