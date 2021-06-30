import { IBase } from '../../base';
import { ICodeableConcept } from '../../codeableConcepts';
import { IPeriod } from '../../periods';
import { IReference } from '../../references';

export interface IIdentifier extends IBase {
  use: string;
  type: ICodeableConcept;
  system?: string;
  value: string;
  period: IPeriod;
  assigner?: IReference | string;
}
