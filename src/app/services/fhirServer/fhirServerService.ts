import axios, { AxiosInstance, Method } from 'axios';
import { Agent } from 'https';
import * as https from 'https';
import { inject, injectable } from 'inversify';
import { isEmpty } from 'lodash';
import TYPES from '../../config/types';
import { Env, IEnv } from '../../config/env';
import { FhirResourceService } from '../resources';
import { GenericResponseError, logger } from '../../utils';
import { AggregatedData, FetchProps, FhirProperties, IFhirServer, IndexAccessor } from '../../models';

@injectable()
export class FhirServerService implements IFhirServer {

  private readonly env: IEnv;
  private readonly httpsAgent: Agent;
  private readonly axiosInstance: AxiosInstance;

  constructor() {
    this.env = Env.all();

    this.httpsAgent = new https.Agent({
      rejectUnauthorized: false,
    });

    this.axiosInstance = axios.create({
      httpsAgent: this.httpsAgent,
    });

    this.axiosInstance.interceptors.request.use((config: any) => {
      config.params = config.params || {};
      config.params._format = 'json';
      return config;
    });
  }

  @inject(TYPES.FhirResourceService)
  private readonly fhirResourceService: FhirResourceService;

  private static chooseMethodFromConnectionName(connectionName = 'lafia'): string {
    logger.info('Running FhirServerService.chooseMethodFromConnectionName');
    let [part1, part2] = connectionName.toLowerCase().split('fhir');
    let others = ''

    if (part2) {
      others = part2[0].toUpperCase();
      others += part2.substring(1);
    }

    return `${part1}Fhir${others}`
  }

  private static extractYear(date: string) {
    logger.info('Running FhirServerService.extractYear');
    return new Date(date).getFullYear();
  }

  private async fetchResource(fetchProps: FetchProps): Promise<any> {
    logger.info('Running FhirServerService.fetchResource');
    let { resourceQuery, selectMethod, fetchSampleResource, token, data } = fetchProps;
    try {
      let resourceData: any = {};

      if (fetchSampleResource) {
        resourceData.data = await this.fetchSampleResources(resourceQuery);
      } else {
        // @ts-ignore
        resourceData = await this[selectMethod](
          resourceQuery,
          'GET',
          { token }
        );
      }

      return resourceData.data;
    } catch (e: any) {
      const [resourceName,] = resourceQuery.split('?');
      data.failed.push({ resourceName, message: e.message });
    }
  }

  private static groupResource(resourceData: any, data: AggregatedData, resourceDateField: string, resourceName: string) {
    logger.info('Running FhirServerService.groupResource');

    for (let entry of resourceData?.entry) {

      const date = entry.resource ? entry.resource[resourceDateField] : entry[resourceDateField];

      const entryResource = entry?.resource ? entry.resource : entry;

      if (date) {
        const year = FhirServerService.extractYear(date);

        if (data.groupedEntries[year]) {
          // @ts-ignore
          data.groupedEntries[year].push({ resourceName, resourceValue: entryResource });
        } else {
          data.groupedEntries[year] = [{ resourceName, resourceValue: entryResource }];
        }
      } else {
        data.ungroupedEntries.push(entryResource);
      }
    }
  }

  private static organizeResourceByDate(data: AggregatedData) {
    logger.info('Running FhirServerService.organizeResourceByDate');

    const resourceByDates: IndexAccessor | any = {};

    for (let year in data.groupedEntries) {

      const resourceEntries: IndexAccessor = {}
      for (const entry of data.groupedEntries[year]) {

        if (resourceEntries[entry.resourceName]) {
          resourceEntries[entry.resourceName].push(entry.resourceValue);
        } else {
          resourceEntries[entry.resourceName] = [entry.resourceValue];
        }
      }

      if (resourceByDates[year]) {
        resourceByDates[year].push(resourceEntries);
      } else {
        resourceByDates[year] = [resourceEntries];
      }
    }

    if (!isEmpty(resourceByDates)) data.grouped = [resourceByDates];

    const grouped: any = [];
    const groupedData = data.grouped[0]
    let groupedYear: IndexAccessor = {};

    this.organizeDataInYears(groupedData, groupedYear, grouped);

    data.grouped = grouped;
  }

  public async executeQuery(resourceQuery: string, httpMethod: Method, props: FhirProperties = {}): Promise<any> {
    logger.info('Running FhirServerService.executeQuery');
    try {
      let { connectionName } = props!;

      connectionName = connectionName || 'lafia';

      const selectMethod = FhirServerService.chooseMethodFromConnectionName(connectionName);

      // @ts-ignore
      return await this[selectMethod](resourceQuery, httpMethod, props);

    } catch (e: any) {
      throw new GenericResponseError(e.message, e.code);
    }
  }

  public async lafiaFhir(resourceQuery: string, httpMethod: Method, props?: FhirProperties): Promise<any> {
    logger.info('Running FhirServerService.lafiaFhir');
    try {
      const { data } = props!;
      const { status, data: responseData, headers } = await this.axiosInstance({
        url: resourceQuery,
        baseURL: `${this.env.fhir_server_base_url}/`,
        method: httpMethod,
        data,
      });

      delete headers['transfer-encoding'];
      headers['x-powered-by'] = 'LAFIA FHIR 5.4.0 REST Server (FHIR Server; FHIR 4.0.1/R4)';

      return {
        status,
        headers,
        data: 'headers' in responseData ? responseData.data : responseData,
      };
    } catch (e: any) {
      delete e.response.headers['transfer-encoding'];
      e.response.headers['x-powered-by'] = 'LAFIA FHIR 5.4.0 REST Server (FHIR Server; FHIR 4.0.1/R4)';
      logger.error(`Could not fetch data from lafia`);
      throw new GenericResponseError(e.message, e.response);
    }
  }

  public async saFhir(resourceQuery: string, httpMethod: Method, props?: FhirProperties): Promise<any> {
    logger.info('Running FhirServerService.saFhir');
    try {
      let { data, token, ig } = props!;

      if (!ig) ig = 'pdex';

      const { status, data: responseData } = await this.axiosInstance({
        url: resourceQuery,
        method: httpMethod,
        baseURL: `${this.env.safhir_base_url}/${ig}/`,
        headers: {
          'Authorization': `Bearer ${token}`,
        },
        data,
      });

      return {
        status,
        data: responseData,
        headers: { 'Content-Type': 'application/fhir+json' }
      };
    } catch (e: any) {
      logger.error(`Could not fetch data from safhir`);
      e.response.headers['content-type'] = 'application/fhir+json';
      throw new GenericResponseError(e.message, e.response);
    }
  }

  public async fetchSampleResources(resourceName: string): Promise<any> {
    logger.info('Running FhirServerService.fetchSampleResources');
    try {
      const fhirSampleResources = await this.fhirResourceService.findOne({ slug: resourceName.toLocaleLowerCase() });

      return fhirSampleResources?.examples;
    } catch (e: any) {
      logger.error(`Error fetching sample resources`);
      throw new GenericResponseError(e.message, e.response);
    }
  }

  public async aggregateFhirData(props: FhirProperties): Promise<any> {
    logger.info('Running FhirServerService.aggregateFhirData');
    const { connectionName, token, patient_id } = props;
    const data: AggregatedData = {
      grouped: [],
      ungrouped: [],
      groupedEntries: {},
      ungroupedEntries: [],
      failed: [],
    }

    let fetchSampleResource = false;
    if (connectionName?.toLowerCase() === 'test' || connectionName?.toLocaleLowerCase() === 'sample') {
      fetchSampleResource = true;
    }

    const selectMethod = FhirServerService.chooseMethodFromConnectionName(connectionName!);

    const resourceDateFieldAndReference: IndexAccessor = {
      Procedure: ['performedDateTime', 'subject'],
      Condition: ['recordedDate', 'subject'],
      Observation: ['issued', 'subject'],
      DiagnosticReport: ['issued', 'subject'],
      MedicationDispense: ['whenHandedOver', 'subject'],
      Medication: ['', ''],
      Immunization: ['occurrenceDateTime', 'patient'],
      DocumentReference: ['date', 'subject'],
      AllergyIntolerance: ['recordedDate', 'patient'],
      MedicationRequest: ['authoredOn', 'subject'],
    }

    const resourceNames = [
      'Procedure', 'Condition',
      'Observation', 'DiagnosticReport',
      'MedicationDispense', 'Medication',
      'Immunization', 'DocumentReference',
      'AllergyIntolerance', 'MedicationRequest'
    ];

    for (let resourceName of resourceNames) {
      const [resourceDateField, resourceReference] = resourceDateFieldAndReference[resourceName];
      const searchParam = resourceReference ? `${resourceReference}=Patient/${patient_id}` : '';

      let resourceQuery = !connectionName || connectionName?.toLocaleLowerCase() === 'lafia' ?
        `${resourceName}?${searchParam}` : `${resourceName}`;

      const resourceData = await this.fetchResource({ resourceQuery, selectMethod, token, fetchSampleResource, data });

      if (resourceData?.entry) {
        FhirServerService.groupResource(resourceData, data, resourceDateField, resourceName);
      }

      if (data.ungroupedEntries.length) {
        data.ungrouped.push({ resourceName, resourceValue: data.ungroupedEntries });
        data.ungroupedEntries = [];
      }

      FhirServerService.organizeResourceByDate(data);
    }

    return {
      failed: data.failed,
      ungrouped: data.ungrouped,
      grouped: data.grouped || [],
    }

  }

  private static organizeDataInYears(groupedData: IndexAccessor, groupedYear: IndexAccessor, grouped: any) {
    logger.info('Running FhirServerService.organizeDataInYears');
    for (let year in groupedData) {
      groupedYear[year] = [];
      for (let data of groupedData[year]) {
        for (let resourceName in data) {
          groupedYear[year].push({
            resourceName,
            resourceValue: data[resourceName]
          });
        }
      }

      grouped.push({ year, data: groupedYear[year] });
      groupedYear = {}
    }
  }
}
