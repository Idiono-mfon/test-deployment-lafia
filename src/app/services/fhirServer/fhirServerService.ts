import { injectable } from 'inversify';
import axios, { Method } from 'axios';
import { Env } from '../../config/env';
import { IFhirServer } from '../../models';
import { GenericResponseError } from '../../utils';

const env = Env.all();

const axiosInstance = axios.create({
  headers: {
    'Content-Type': 'application/fhir+json'
  }
});

axiosInstance.interceptors.request.use((config: any) => {
  config.params = config.params || {};
  config.params._format = 'json';
  return config;
});

@injectable()
export class FhirServerService implements IFhirServer {

  private static chooseMethodFromConnectionName(connectionName: string): string {
    let [part1, part2] = connectionName.toLowerCase().split('fhir');
    let others = ''

    if (part2) {
      others = part2[0].toUpperCase();
      others += part2.substring(1);
    }

    return `${part1}Fhir${others}`
  }


  public async executeQuery(resourceQuery: string, httpMethod: Method, props?: FhirProperties): Promise<any> {
    try {
      let { connectionName } = props!;

      connectionName = connectionName || 'lafiaFhir';

      const selectMethod = FhirServerService.chooseMethodFromConnectionName(connectionName);

      // @ts-ignore
      return await this[selectMethod](resourceQuery, httpMethod, props);

    } catch (e: any) {
      throw new GenericResponseError(e.message, e.response);
    }
  }

  public async lafiaFhir(resourceQuery: string, httpMethod: Method, props?: FhirProperties): Promise<any> {
    try {
      const { data } = props!;
      const { status, data: responseData, headers } = await axiosInstance({
        url: resourceQuery,
        baseURL: `${env.fhir_server_base_url}/`,
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
    } catch (e: any) {
      delete e.response.headers['transfer-encoding'];
      e.response.headers['x-powered-by'] = 'LAFIA FHIR 5.4.0 REST Server (FHIR Server; FHIR 4.0.1/R4)';
      throw new GenericResponseError(e.message, e.response);
    }
  }

  public async saFhir(resourceQuery: string, httpMethod: Method, props?: FhirProperties): Promise<any> {
    try {
      let { data, token, ig } = props!;

      if (!ig) ig = 'uscore';

      const { status, data: responseData, headers } = await axiosInstance({
        url: resourceQuery,
        method: httpMethod,
        baseURL: `${env.safhir_base_url}/${ig}/`,
        headers: {
          authorization: `Bearer ${token}`,
        },
        data,
      });

      delete headers['transfer-encoding'];

      return {
        status,
        headers,
        data: responseData,
      };
    } catch (e: any) {
      delete e.response.headers['transfer-encoding'];
      throw new GenericResponseError(e.message, e.response);
    }
  }
}


export interface FhirProperties {
  data?: any,
  token?: string,
  connectionName?: string,
  ig?: string,
}
