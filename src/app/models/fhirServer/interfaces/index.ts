export interface IFhirServer {
  communicate(resourceQuery: string, httpMethod: string, data?: any): Promise<any>;
}