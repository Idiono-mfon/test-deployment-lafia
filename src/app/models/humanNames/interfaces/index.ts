import { IBase } from '../../base';
import { IPeriod } from '../../periods';

export interface IHumanName extends IBase {
  use: string;
  text?: string;
  family?: string;
  given?: string[];
  prefix?: string[];
  suffix?: string[];
  period?: IPeriod;
}
