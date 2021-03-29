import { IBase } from '../../base';
import { ICodeableConcept } from '../../codeableConcepts';

export interface ICommunication extends IBase {
  language?: ICodeableConcept;
  preferred?: boolean;
}
