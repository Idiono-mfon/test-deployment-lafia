import { inject, injectable } from 'inversify';
import TYPES from '../../config/types';
import { ComponentModel } from '../../models/lang/componentModel';
import { IComponent, ILabel, ILangauge } from '../../models/lang/interfaces';
import { LabelModel } from '../../models/lang/labelModel';
import { LanguageModel } from '../../models/lang/languageModel';
import {
  ComponentRepository,
  LabelRepository,
  LanguageRepository
} from '../../repository';
import { BadGatewayError, BadRequestError, ConflictError, logger, NotFoundError } from '../../utils';

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
    logger.info('Running LanguageService.fetchLanguage');
    return this.languageRepository.fetchLanguages();
  }

  public async fetchLabel(): Promise<ILabel[]> {
    logger.info('Running LanguageService.fetchLabel');
    return this.labelRepository.fetchLabels();
  }

  public async fetchComponent(): Promise<IComponent[]> {
    logger.info('Running LanguageService.fetchComponent');
    return this.componentRepository.fetchComponents();
  }

  public async fetchLanguagesWithContent(code: string): Promise<ILangauge> {
    logger.info('Running LanguageService.fetchLanguagesWithContent');
    const language: LanguageModel = await this.languageRepository.fetchLanguageByCode(code);
    if ( !language ) {
      throw new NotFoundError("language not found");
    }

    return this.languageRepository.fetchLanguageContent(language);
  }

  // create

  public async addLanguage(data: ILangauge): Promise<ILangauge> {
    logger.info('Running LanguageService.addLanguage');
    if ( !data.name || !data.code ) {
      throw new BadRequestError("language name and code are required feilds");
    }
    const language: LanguageModel = await this.languageRepository.fetchLanguageByNameAndCode(data.code, data.name);
    if (language) {
      throw new ConflictError("duplicate language resource");
    }
    return this.languageRepository.addLanguage(data);
  }

  public async addLabel(data: ILabel): Promise<ILabel | any> {
    logger.info('Running LanguageService.addLabel');
    if ( !data.name ) {
      throw new BadRequestError("label name is required");
    }
    try {
      const label: ILabel = await this.labelRepository.fetchLabelByName(data.name);
      if (label ) {
        throw new ConflictError("duplicate label resource");
      }
      return this.labelRepository.addLabel(data);
    } catch (e: any) {
      throw new BadGatewayError(e.message);
    }
  }

  public async addComponent(data: IComponent): Promise<IComponent> {
    logger.info('Running LanguageService.addComponent');
    data.feilds = JSON.stringify(data.feilds);
    return this.componentRepository.addComponent(data);
  }

  public async addComponentToLabel(labelId: string, data: IComponent): Promise<any> {
    logger.info('Running LanguageService.addComponentToLabel');
    const label: LabelModel = await this.labelRepository.fetchLabelByID(labelId);
    if ( !label ) {
      throw new NotFoundError("label not found");
    }
    return this.labelRepository.addComponent(labelId, data);
  }

  public async attachComponentToLanguage(languageId: string, componentId: string): Promise<any> {
    logger.info('Running LanguageService.attachComponentToLanguage');
    const language: LanguageModel = await this.languageRepository.fetchLanguageByID(languageId);
    if ( !language ) {
      throw new NotFoundError("language not found");
    }
    const component: ComponentModel = await this.componentRepository.fetchComponentByID(componentId);
    if ( !component ) {
      throw new NotFoundError("component not found");
    }
    return this.languageRepository.attachComponent(languageId, componentId);
  }

  public async detachComponentFromLanguage(languageId: string, componentId: string): Promise<any> {
    logger.info('Running LanguageService.detachComponentFromLanguage');
    const language: LanguageModel = await this.languageRepository.fetchLanguageByID(languageId);
    if ( !language ) {
      throw new NotFoundError("language not found");
    }
    const component: ComponentModel = await this.componentRepository.fetchComponentByID(componentId);
    if ( !component ) {
      throw new NotFoundError("component not found");
    }
    return this.languageRepository.detachComponent(languageId, componentId);
  }


  public async attachComponentToLabel(labelId: string, componentId: string): Promise<any> {
    logger.info('Running LanguageService.attachComponentToLabel');
    const label: LabelModel = await this.labelRepository.fetchLabelByID(labelId);
    if ( !label ) {
      throw new NotFoundError("label not found");
    }
    const component: ComponentModel = await this.componentRepository.fetchComponentByID(componentId);
    if ( !component ) {
      throw new NotFoundError("component not found");
    }
    return this.labelRepository.attachComponent(labelId, componentId);
  }

  public async detachComponentFromLabel(labelId: string, componentId: string): Promise<any> {
    logger.info('Running LanguageService.detachComponentFromLabel');
    const label: LabelModel = await this.labelRepository.fetchLabelByID(labelId);
    if ( !label ) {
      throw new NotFoundError("label not found");
    }
    const component: ComponentModel = await this.componentRepository.fetchComponentByID(componentId);
    if ( !component ) {
      throw new NotFoundError("component not found");
    }
    return this.labelRepository.detachComponent(labelId, componentId);
  }


  public async attachLabelToLanguage(languageId: string, labelId: string): Promise<any> {
    logger.info('Running LanguageService.attachLabelToLanguage');
    const label: LabelModel = await this.labelRepository.fetchLabelByID(labelId);
    if ( !label ) {
      throw new NotFoundError("label not found");
    }
    const language: LanguageModel = await this.languageRepository.fetchLanguageByID(languageId);
    if ( !language ) {
      throw new NotFoundError("language not found");
    }
    return this.languageRepository.attachLabel(languageId, labelId);
  }

  public async detachLabelFromLanguage(languageId: string, labelId: string): Promise<any> {
    logger.info('Running LanguageService.detachLabelFromLanguage');
    const label: LabelModel = await this.labelRepository.fetchLabelByID(labelId);
    if ( !label ) {
      throw new NotFoundError("label not found");
    }
    const language: LanguageModel = await this.languageRepository.fetchLanguageByID(labelId);
    if ( !language ) {
      throw new NotFoundError("language not found");
    }
    return this.languageRepository.detachLabel(languageId, labelId);
  }

  // update

  public async updateLanguage(id: string, data: ILangauge): Promise<ILangauge> {
    logger.info('Running LanguageService.updateLanguage');
    return this.languageRepository.updateLanguage(id, data);
  }

  public async updateLabel(id: string, data: ILabel): Promise<ILabel> {
    logger.info('Running LanguageService.updateLabel');
    return this.labelRepository.updateLabel(id, data);
  }

  public async updateComponent(id: string, data: IComponent): Promise<IComponent> {
    logger.info('Running LanguageService.updateComponent');
    return this.componentRepository.updateComponent(id, data);
  }

  // delete

  public async deleteLanguage(id: string): Promise<number> {
    logger.info('Running LanguageService.deleteLanguage');
    return this.languageRepository.deleteLanguage(id);
  }

  public async deleteLabel(id: string): Promise<number> {
    logger.info('Running LanguageService.deleteLabel');
    return this.labelRepository.deleteLabel(id);
  }

  public async deleteComponent(id: string): Promise<number> {
    logger.info('Running LanguageService.deleteComponent');
    return this.componentRepository.deleteComponent(id);
  }
}
