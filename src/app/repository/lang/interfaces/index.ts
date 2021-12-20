import { LanguageModel } from '../../../models';
import { DbAccess } from '../../base';

export interface ILabelRepository extends DbAccess {
  fetchLabelByName(name: string): Promise<any>;

  addComponent(id: string, data: object): Promise<any>;

  attachComponent(labelId: string, componentId: string): Promise<any>;

  detachComponent(labelId: string, componentId: string): Promise<any>;
}

export interface ILanguageRepository extends DbAccess {
  fetchByCode(code: string): Promise<any>;

  fetchByNameAndCode(code: string, name: string): Promise<any>;

  fetchContent(language: LanguageModel): Promise<any>;

  attachLabel(languageId: string, labelId: string): Promise<any>;

  detachLabel(languageId: string, labelId: string): Promise<any>;

  attachComponent(languageId: string, componentId: string): Promise<any>;

  detachComponent(languageId: string, componentId: string): Promise<any>
}
