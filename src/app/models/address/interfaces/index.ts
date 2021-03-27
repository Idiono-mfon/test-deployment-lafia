import { IPeriod } from '../../periods';

export interface IAddress {
  id?: string;
  use: string;
  type: string;
  text?: string;
  line?: string;
  city?: string;
  district?: string;
  state?: string;
  postal_code?: string;
  country?: string;
  period?: IPeriod;
}
