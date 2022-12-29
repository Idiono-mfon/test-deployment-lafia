import { IAgreement } from '../../../models';
import { DbAccess } from '../../base';

export interface IAgreementRepository extends DbAccess {
  getAgreementByName(data: string): Promise<IAgreement>;
}
