import { inject, injectable } from 'inversify';
import TYPES from '../../config/types';
import { DbAccess, ILabelRepository, ILanguageRepository } from '../../repository';
import { ComponentModel, IComponent, ILabel, ILanguage, LanguageModel, LabelModel } from '../../models';
import { BadGatewayError, BadRequestError, ConflictError, logger, NotFoundError } from '../../utils';
import { ILanguageService } from './interfaces';

@injectable()
export class LanguageService implements ILanguageService {

  @inject(TYPES.LanguageRepository)
  private readonly languageRepository: ILanguageRepository;

  @inject(TYPES.LabelRepository)
  private readonly labelRepository: ILabelRepository;

  @inject(TYPES.ComponentRepository)
  private readonly componentRepository: DbAccess;

  public async findAll(): Promise<ILanguage[]> {
    logger.info('Running LanguageService.findAll');
    return this.languageRepository.findAll();
  }

  public async findAllLabels(): Promise<ILabel[]> {
    logger.info('Running LanguageService.findAllLabels');
    return this.labelRepository.findAll();
  }

  public async findAllComponents(): Promise<IComponent[]> {
    logger.info('Running LanguageService.findAllComponents');
    return this.componentRepository.findAll();
  }

  public async findLanguagesWithContent(code: string): Promise<ILanguage> {
    logger.info('Running LanguageService.findLanguagesWithContent');
    const language: LanguageModel = await this.languageRepository.fetchByCode(code);

    if (!language) {
      throw new NotFoundError('language not found');
    }

    return this.languageRepository.fetchContent(language);
  }

  public async create(data: ILanguage): Promise<ILanguage> {
    logger.info('Running LanguageService.create');
    if (!data.name || !data.code) {
      throw new BadRequestError('language name and code are required feilds');
    }
    const language: LanguageModel = await this.languageRepository.fetchByNameAndCode(data.code, data.name);
    if (language) {
      throw new ConflictError('duplicate language resource');
    }
    return this.languageRepository.create(data);
  }

  public async createLabel(data: ILabel): Promise<ILabel | any> {
    logger.info('Running LanguageService.createLabel');
    if (!data.name) {
      throw new BadRequestError('label name is required');
    }
    try {
      const label: ILabel = await this.labelRepository.fetchLabelByName(data.name);
      if (label) {
        throw new ConflictError('duplicate label resource');
      }
      return this.labelRepository.create(data);
    } catch (e: any) {
      throw new BadGatewayError(e.message);
    }
  }

  public async createComponent(data: IComponent): Promise<IComponent> {
    logger.info('Running LanguageService.createComponent');
    data.feilds = JSON.stringify(data.feilds);
    return this.componentRepository.create(data);
  }

  public async addComponentToLabel(labelId: string, data: IComponent): Promise<any> {
    logger.info('Running LanguageService.addComponentToLabel');
    const label: LabelModel = await this.labelRepository.findById(labelId);
    if (!label) {
      throw new NotFoundError('label not found');
    }
    return this.labelRepository.addComponent(labelId, data);
  }

  public async attachComponentToLanguage(languageId: string, componentId: string): Promise<any> {
    logger.info('Running LanguageService.attachComponentToLanguage');
    const language: LanguageModel = await this.languageRepository.findById(languageId);
    if (!language) {
      throw new NotFoundError('language not found');
    }
    const component: ComponentModel = await this.componentRepository.findById(componentId);
    if (!component) {
      throw new NotFoundError('component not found');
    }
    return this.languageRepository.attachComponent(languageId, componentId);
  }

  public async detachComponentFromLanguage(languageId: string, componentId: string): Promise<any> {
    logger.info('Running LanguageService.detachComponentFromLanguage');
    const language: LanguageModel = await this.languageRepository.findById(languageId);
    if (!language) {
      throw new NotFoundError('language not found');
    }
    const component: ComponentModel = await this.componentRepository.findById(componentId);
    if (!component) {
      throw new NotFoundError('component not found');
    }
    return this.languageRepository.detachComponent(languageId, componentId);
  }

  public async attachComponentToLabel(labelId: string, componentId: string): Promise<any> {
    logger.info('Running LanguageService.attachComponentToLabel');
    const label: LabelModel = await this.labelRepository.findById(labelId);
    if (!label) {
      throw new NotFoundError('label not found');
    }
    const component: ComponentModel = await this.componentRepository.findById(componentId);
    if (!component) {
      throw new NotFoundError('component not found');
    }
    return this.labelRepository.attachComponent(labelId, componentId);
  }

  public async detachComponentFromLabel(labelId: string, componentId: string): Promise<any> {
    logger.info('Running LanguageService.detachComponentFromLabel');
    const label: LabelModel = await this.labelRepository.findById(labelId);
    if (!label) {
      throw new NotFoundError('label not found');
    }
    const component: ComponentModel = await this.componentRepository.findById(componentId);
    if (!component) {
      throw new NotFoundError('component not found');
    }
    return this.labelRepository.detachComponent(labelId, componentId);
  }

  public async attachLabelToLanguage(languageId: string, labelId: string): Promise<any> {
    logger.info('Running LanguageService.attachLabelToLanguage');
    const label: LabelModel = await this.labelRepository.findById(labelId);
    if (!label) {
      throw new NotFoundError('label not found');
    }
    const language: LanguageModel = await this.languageRepository.findById(languageId);
    if (!language) {
      throw new NotFoundError('language not found');
    }
    return this.languageRepository.attachLabel(languageId, labelId);
  }

  public async detachLabelFromLanguage(languageId: string, labelId: string): Promise<any> {
    logger.info('Running LanguageService.detachLabelFromLanguage');
    const label: LabelModel = await this.labelRepository.findById(labelId);
    if (!label) {
      throw new NotFoundError('label not found');
    }
    const language: LanguageModel = await this.languageRepository.findById(labelId);
    if (!language) {
      throw new NotFoundError('language not found');
    }
    return this.languageRepository.detachLabel(languageId, labelId);
  }

  public async update(id: string, data: ILanguage): Promise<ILanguage> {
    logger.info('Running LanguageService.update');
    return this.languageRepository.update(id, data);
  }

  public async updateLabel(id: string, data: ILabel): Promise<ILabel> {
    logger.info('Running LanguageService.updateLabel');
    return this.labelRepository.update(id, data);
  }

  public async updateComponent(id: string, data: IComponent): Promise<IComponent> {
    logger.info('Running LanguageService.updateComponent');
    return this.componentRepository.update(id, data);
  }

  public async delete(id: string): Promise<number> {
    logger.info('Running LanguageService.delete');
    return this.languageRepository.delete(id);
  }

  public async deleteLabel(id: string): Promise<number> {
    logger.info('Running LanguageService.deleteLabel');
    return this.labelRepository.delete(id);
  }

  public async deleteComponent(id: string): Promise<number> {
    logger.info('Running LanguageService.deleteComponent');
    return this.componentRepository.delete(id);
  }
}
