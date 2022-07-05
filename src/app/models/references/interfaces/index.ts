import { IBase } from '../../base';
import { IIdentifier } from '../../identifiers';

export interface IReference extends IBase  {
  reference?: string;
  type?: string;
  identifier?: IIdentifier;
  display?: string;
}
