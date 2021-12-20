import { IBase } from '../../base';

export interface ILanguage extends IBase {
  name: string;
  code: string;
  englishName?: string;
  labels?: Array<any> | any;
}

export interface ILanguageLabel extends IBase {
  languageId: string;
  labelId: string;
}

export interface ILanguageComponent extends IBase {
  languageId: string;
  componentId: string;
}
