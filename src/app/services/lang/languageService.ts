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
} from '../../repository/lang';
import { BadGatewayError, BadRequestError, ConflictError, NotFoundError } from '../../utils';

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

  public async fetchLanguagesWithContent(code: string): Promise<ILangauge> {
    const language: LanguageModel = await this.languageRepository.fetchLanguageByCode(code);
    if ( !language ) {
      throw new NotFoundError("language not found");
    }
    return this.languageRepository.fetchLanguageContent(language);
  }

  // create

  public async addLanguage(data: ILangauge): Promise<ILangauge> {
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
    if ( !data.name ) {
      throw new BadRequestError("label name is required");
    }
    try {
      const label: ILabel = await this.labelRepository.fetchLabelByName(data.name);
      if (label ) {
        throw new ConflictError("duplicate label resource");
      }
      return this.labelRepository.addLabel(data);
    } catch (e) {
      throw new BadGatewayError(e.toSring())
    }
  }

  public async addComponent(data: IComponent): Promise<IComponent> {
    data.feilds = JSON.stringify(data.feilds);  
    return this.componentRepository.addComponent(data);
  }

  public async addComponentToLabel(labelId: string, data: IComponent): Promise<any> {
    const label: LabelModel = await this.labelRepository.fetchLabelByID(labelId);
    if ( !label ) {
      throw new NotFoundError("label not found");
    }
    return this.labelRepository.addComponent(labelId, data);
  }

  public async attachComponentToLanguage(languageId: string, componentId: string): Promise<any> {
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


// exports.up = async function(knex, Promise) {
//   await knex.schema.alterTable('campaigns', function(table) {
//       table.timestamp('intake_start_date').alter();
//       table.timestamp('intake_end_date').alter();
//   });
// }