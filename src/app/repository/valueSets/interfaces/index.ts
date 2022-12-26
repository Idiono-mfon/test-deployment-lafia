import { IValueSet } from '../../../models';
import { DbAccess } from '../../base';

export interface IValueSetRepository extends DbAccess {
  getValueSetByName(emailOrPhone: string): Promise<IValueSet | undefined>;
}
