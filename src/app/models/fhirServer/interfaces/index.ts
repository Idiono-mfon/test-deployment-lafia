export interface IFhirServer {
  executeQuery(resourceQuery: string, httpMethod: string, data?: any): Promise<any>;
}