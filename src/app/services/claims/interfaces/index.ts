import { IClaim, IFhirClaim } from '../../../models';

export interface IClaimService {
//   findById(id: string): Promise<IFhirClaim>;

//   update(id: string, data: IClaim): Promise<IFhirClaim>;

  create(data: IClaim): Promise<IClaim>;

  createFromFhir(fhirData: IFhirClaim): Promise<IClaim>;
}
