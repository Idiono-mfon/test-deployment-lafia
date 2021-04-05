import { IBase } from '../../base';

export interface ICodeSystem extends IBase {
  code: string;
  system: string;
  display?: string;
  type: string;
}

export interface ICodeType {
  relationship: string,
  language: string,
  maritalStatus: string,
}
