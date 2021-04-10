import { IBase } from '../../base';
import { ICodeableConcept } from '../../codeableConcepts';
import { IIdentifier } from '../../identifiers';
import { IPeriod } from '../../periods';
import { IReference } from '../../references';

export interface IQualification extends IBase {
  identifier?: IIdentifier | IIdentifier[];
  code?: ICodeableConcept;
  period?: IPeriod;
  issuer?: IReference
}
