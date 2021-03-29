import { IBase } from '../../base';

export interface IPeriod extends IBase {
  start: Date;
  end?: Date;
}
