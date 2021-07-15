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
  private readonly fhirBaseUrl: string;

  constructor() {
    this.fhirBaseUrl = Env.all().fhir_server_base_url;
  }

  public async communicate(resourceQuery: string, httpMethod: Method, data?: any): Promise<any> {
    try {
      const { status, data: responseData, headers } = await axiosInstance({
        url: resourceQuery,
        method: httpMethod,
        data,
      });

      return {
        status,
        headers,
        data: responseData,
      };
    } catch (e) {
      console.error(e);
      throw new GenericResponseError(e.message, e.response);
    }
  }
}
