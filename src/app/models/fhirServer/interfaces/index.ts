import { Method } from 'axios';

export interface IFhirServer {
  executeQuery(resourceQuery: string, httpMethod: string, data?: any): Promise<any>;

  lafiaFhir(resourceQuery: string, httpMethod: Method, props?: FhirProperties): Promise<any>;

  saFhir(resourceQuery: string, httpMethod: Method, props?: FhirProperties): Promise<any>;

  fetchSampleResources(resourceName: string): Promise<any>;

  aggregateFhirData(props: FhirProperties): Promise<any>;

}

export interface FetchProps {
  resourceQuery: string;
  selectMethod: any;
  data: AggregatedData;
  fetchSampleResource?: boolean
  token?: string;
}

export interface FhirProperties {
  data?: any,
  token?: string,
  connectionName?: string,
  ig?: string,
  patient_id?: string,
}

export interface IndexAccessor {
  [key: string]: string[] | any;
}

export interface AggregatedData {
  grouped: IndexAccessor[],
  ungrouped: IndexAccessor[],
  groupedEntries: IndexAccessor,
  failed: IndexAccessor[],
  ungroupedEntries: any[],
}
