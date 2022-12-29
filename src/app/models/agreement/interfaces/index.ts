import { IBase } from '../../base';

export interface IAgreement extends IBase {
  name?: string;
  title?: string;
  contents?: string;
}

export interface ICreateAgreementDto {
  name: string;
  title: string;
  contents: string;
}
