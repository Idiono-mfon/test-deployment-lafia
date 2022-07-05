import { IEncounter } from '../../../models';
import { DbAccess } from '../../base';

export interface IEncounterRepository extends DbAccess {
  getEncounterByResourceId(resource_id: string): Promise<IEncounter | undefined>
}
