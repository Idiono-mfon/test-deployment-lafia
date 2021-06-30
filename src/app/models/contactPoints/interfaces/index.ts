import { IBase } from '../../base';
import { IPeriod } from '../../periods';

export interface IContactPoint extends IBase  {
  system: string;
  value?: string;
  use: string;
  rank?: number;
  period?: IPeriod;
}
