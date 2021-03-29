import { IBase } from '../../base';
import { IReference } from '../../references';

export interface IPatientLink extends IBase {
  other?: IReference;
  type: string;
}
