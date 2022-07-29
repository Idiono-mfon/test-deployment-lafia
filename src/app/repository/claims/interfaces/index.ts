import { IClaim } from '../../../models';
import { DbAccess } from '../../base';

export interface IClaimRepository extends DbAccess {
  getClaimByResourceId(resource_id: string): Promise<IClaim | undefined>
}
