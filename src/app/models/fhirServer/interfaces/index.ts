export interface IFhirServer {
  communicate(resourceQuery: string, httpMethod: string): Promise<any>;
}