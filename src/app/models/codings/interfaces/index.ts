import { IBase } from '../../base';

export interface ICoding extends IBase {
  system?: string;
  version?: string;
  code?: string;
  display?: string;
  userSelected?: boolean;
}
