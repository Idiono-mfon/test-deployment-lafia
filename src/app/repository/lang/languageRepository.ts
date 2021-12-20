import { inject, injectable } from 'inversify';
import TYPES from '../../config/types';
import { BaseRepository, DbAccess } from '../base';
import { logger } from '../../utils';
import { LanguageModel } from '../../models';
import { ILanguageRepository } from './interfaces';

@injectable()
export class LanguageRepository extends BaseRepository implements ILanguageRepository {

  @inject(TYPES.ComponentRepository)
  private readonly componentRepository: DbAccess;

  constructor() {
    super(LanguageModel);
  }

  public async fetchByCode(code: string): Promise<any> {
    logger.info('Running LanguageRepository.fetchByCode');

    return this.findOne({ code });
  }

  public async fetchByNameAndCode(code: string, name: string): Promise<any> {
    logger.info('Running LanguageRepository.fetchByNameAndCode');

    return this.findOne({ code, name });
  }

  public async fetchContent(language: LanguageModel): Promise<any> {
    logger.info('Running LanguageRepository.fetchContent');

    const languageId: string | any = language.id;
    return LanguageModel.query()
      .withGraphFetched('labels.components(forLanguage)')
      .modifiers({
        forLanguage(builder) {
          builder.where('language_id', languageId);
        }
      })
      .where('code', language.code).first();
  }

  public async attachLabel(languageId: string, labelId: string): Promise<any> {
    logger.info('Running LanguageRepository.attachLabel');

    return LanguageModel.relatedQuery('labels').for(languageId).relate(labelId);
  }

  public async detachLabel(languageId: string, labelId: string): Promise<any> {
    logger.info('Running LanguageRepository.detachLabel');

    const language = await this.findById(languageId);

    return language.$relatedQuery('labels')
      .unrelate().where('id', labelId);
  }

  public async attachComponent(languageId: string, componentId: string): Promise<any> {
    logger.info('Running LanguageRepository.attachComponent');

    const language = await this.findById(languageId);
    const component = await this.componentRepository.findById(componentId);

    return language.$relatedQuery('components')
      .relate(component);
  }

  public async detachComponent(languageId: string, componentId: string): Promise<any> {
    logger.info('Running LanguageRepository.detachComponent');

    const language = await this.findById(languageId);

    return language.$relatedQuery('components')
      .unrelate().where('id', componentId);
  }
}
