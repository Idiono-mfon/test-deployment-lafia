import { IEncounter, IFhirEncounter } from '../../../models';

export interface IEncounterService {
//   findById(id: string): Promise<IFhirEncounter>;

//   update(id: string, data: IEncounter): Promise<IFhirEncounter>;

  createFromERPNext(data: IEncounter): Promise<IEncounter>;

  create(data: IEncounter): Promise<IEncounter>;

  createFromFhir(fhirData: IFhirEncounter): Promise<IEncounter>;
}
