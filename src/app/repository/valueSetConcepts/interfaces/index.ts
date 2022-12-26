import { IValueSetConcept } from '../../../models';
import { DbAccess } from '../../base';

export interface IValueSetConceptRepository extends DbAccess {
  getConceptByCode(id: string): Promise<IValueSetConcept | undefined>;
}
