import { IOrganization, IFhirOrganization } from '../../../models';

export interface IOrganizationService {
//   findById(id: string): Promise<IFhirOrganization>;

//   update(id: string, data: IOrganization): Promise<IFhirOrganization>;

  create(data: IOrganization): Promise<IOrganization>;
}
