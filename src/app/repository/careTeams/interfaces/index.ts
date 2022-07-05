import { ICareTeam } from '../../../models';
import { DbAccess } from '../../base';

export interface ICareTeamRepository extends DbAccess {
  getCareTeamByResourceId(resource_id: string): Promise<ICareTeam | undefined>
}
