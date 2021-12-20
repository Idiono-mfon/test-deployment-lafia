import { IComponent, ILabel, ILanguage } from '../../../models';

export interface ILanguageService {
  findAll(): Promise<ILanguage[]>;

  findAllLabels(): Promise<ILabel[]>;

  findAllComponents(): Promise<IComponent[]>;

  findLanguagesWithContent(code: string): Promise<ILanguage>;

  create(data: ILanguage): Promise<ILanguage>;

  createLabel(data: ILabel): Promise<ILabel | any>;

  createComponent(data: IComponent): Promise<IComponent>;

  addComponentToLabel(labelId: string, data: IComponent): Promise<any>;

  attachComponentToLanguage(languageId: string, componentId: string): Promise<any>;

  detachComponentFromLanguage(languageId: string, componentId: string): Promise<any>;

  attachComponentToLabel(labelId: string, componentId: string): Promise<any>;

  detachComponentFromLabel(labelId: string, componentId: string): Promise<any>;

  attachLabelToLanguage(languageId: string, labelId: string): Promise<any>;

  detachLabelFromLanguage(languageId: string, labelId: string): Promise<any>;

  update(id: string, data: ILanguage): Promise<ILanguage>;

  updateLabel(id: string, data: ILabel): Promise<ILabel>;

  updateComponent(id: string, data: IComponent): Promise<IComponent>;

  delete(id: string): Promise<number>;

  deleteLabel(id: string): Promise<number>;

  deleteComponent(id: string): Promise<number>;
}
