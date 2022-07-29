import { IOrganization } from '../../../models';
import { DbAccess } from '../../base';

export interface IOrganizationRepository extends DbAccess {
  getOrganizationByResourceId(resource_id: string): Promise<IOrganization | undefined>
}
