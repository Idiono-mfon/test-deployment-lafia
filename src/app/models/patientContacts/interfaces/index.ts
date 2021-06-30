import { IAddress } from '../../address';
import { IBase } from '../../base';
import { ICodeableConcept } from '../../codeableConcepts';
import { IContactPoint } from '../../contactPoints';
import { IHumanName } from '../../humanNames';
import { IPeriod } from '../../periods';
import { IReference } from '../../references';

export interface IPatientContact extends IBase {
  name?: IHumanName;
  address?: IAddress;
  gender: string;
  organization?: IReference;
  period?: IPeriod;
  relationship: ICodeableConcept | ICodeableConcept[];
  telecom: IContactPoint | IContactPoint[];
}
