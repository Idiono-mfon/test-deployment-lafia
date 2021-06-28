import { inject, injectable } from 'inversify';
import TYPES from '../../config/types';
import { IComponent, ILabel, ILangauge } from '../../models/lang/interfaces';
import {
  ComponentRepository,
  LabelRepository,
  LanguageRepository
} from '../../repository/lang';

@injectable()
export class LanguageService {

  @inject(TYPES.LanguageRepository)
  private readonly languageRepository: LanguageRepository;

  @inject(TYPES.LabelRepository)
  private readonly labelRepository: LabelRepository;

  @inject(TYPES.ComponentRepository)
  private readonly componentRepository: ComponentRepository;

  // create

  public async fetchLanguage(): Promise<ILangauge[]> {
    return this.languageRepository.fetchLanguages();
  }

  public async fetchLabel(): Promise<ILabel[]> {
    return this.labelRepository.fetchLabels();
  }

  public async fetchComponent(): Promise<IComponent[]> {
    return this.componentRepository.fetchComponents();
  }

  // create

  public async addLanguage(data: ILangauge): Promise<ILangauge> {
    return this.languageRepository.addLanguage(data);
  }

  public async addLabel(data: ILabel): Promise<ILabel | any> {
    try {
      return this.labelRepository.addLabel(data);
    } catch (e) {
      console.log(e);
    }
  }

  public async addComponent(data: IComponent): Promise<IComponent> {
    return this.componentRepository.addComponent(data);
  }

  // update

  public async updateLanguage(id: string, data: ILangauge): Promise<ILangauge> {
    return this.languageRepository.updateLanguage(id, data);
  }

  public async updateLabel(id: string, data: ILabel): Promise<ILabel> {
    return this.labelRepository.updateLabel(id, data);
  }

  public async updateComponent(id: string, data: IComponent): Promise<IComponent> {
    return this.componentRepository.updateComponent(id, data);
  }

  // delete

  public async deleteLanguage(id: string): Promise<number> {
    return this.languageRepository.deleteLanguage(id);
  }

  public async deleteLabel(id: string): Promise<number> {
    return this.labelRepository.deleteLabel(id);
  }

  public async deleteComponent(id: string): Promise<number> {
    return this.componentRepository.deleteComponent(id);
  }
}
