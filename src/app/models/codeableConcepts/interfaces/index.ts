import { IBase } from '../../base';
import { ICoding } from '../../codings';

export interface ICodeableConcept extends IBase {
  coding?: ICoding[];
  text?: string;
}
