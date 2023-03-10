import { IBase } from '../../base';
import { IPeriod } from '../../periods';

export interface IAddress extends IBase {
  use: string;
  type: string;
  text?: string;
  line?: string;
  city?: string;
  district?: string;
  state?: string;
  postalCode?: string;
  country?: string;
  period?: IPeriod;
}
