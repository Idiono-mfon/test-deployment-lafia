import { IBase } from '../../base';
import { IPeriod } from '../../periods';
import { ContactPointSystem, ContactPointUseValues } from '../enums';

export interface IContactPoint extends IBase {
  system: ContactPointSystem;
  value?: string;
  use: ContactPointUseValues;
  rank?: number;
  period?: IPeriod;
}
