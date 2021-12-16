import { injectable } from 'inversify';
import { ComponentModel, LanguageModel } from '../../models';
import { InternalServerError, logger } from '../../utils';

@injectable()
export class LanguageRepository {

  public async fetchLanguages() {
    logger.info('Running LanguageRepository::fetchLanguages');
    return LanguageModel.query();
  }

  public async fetchLanguageByID(id: string) {
    logger.info('Running LanguageRepository::fetchLanguageByID');
    return LanguageModel.query().findById(id);
  }

  public async fetchLanguageByCode(code: string) {
    logger.info('Running LanguageRepository::fetchLanguageByCode');
    return LanguageModel.query().where('code', code).first();
  }

  public async fetchLanguageByNameAndCode(code: string, name: string) {
    logger.info('Running LanguageRepository::fetchLanguageByNameAndCode');
    return LanguageModel.query().where({ 'code': code, 'name': name }).first();
  }

  public async fetchLanguageContent(language: LanguageModel) {
    logger.info('Running LanguageRepository::fetchLanguageContent');
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

  public async addLanguage(data: any): Promise<any> {
    logger.info('Running LanguageRepository::addLanguage');
    return LanguageModel.query().insertAndFetch(data);
  }

  public async attachLabel(languageId: string, labelId: string): Promise<any> {
    logger.info('Running LanguageRepository::attachLabel');
    return LanguageModel.relatedQuery('labels').for(languageId).relate(labelId);
  }

  public async detachLabel(languageId: string, labelId: string): Promise<any> {
    logger.info('Running LanguageRepository::detachLabel');
    return (await LanguageModel.query().findById(languageId)).$relatedQuery('labels')
      .unrelate().where('id', labelId);
  }

  public async attachComponent(languageId: string, componentId: string): Promise<any> {
    logger.info('Running LanguageRepository::attachComponent');
    return (await LanguageModel.query().findById(languageId)).$relatedQuery('components')
      .relate(await ComponentModel.query().findById(componentId));
  }

  public async detachComponent(languageId: string, componentId: string): Promise<any> {
    logger.info('Running LanguageRepository::detachComponent');
    return (await LanguageModel.query().findById(languageId)).$relatedQuery('components')
      .unrelate().where('id', componentId);
  }

  public async updateLanguage(id: string, data: any): Promise<any> {
    logger.info('Running LanguageRepository::updateLanguage');
    try {
      return await LanguageModel.query().patchAndFetchById(id, data);
    } catch (e: any) {
      throw new InternalServerError(e.message);
    }
  }

  public async deleteLanguage(id: string) {
    logger.info('Running LanguageRepository::deleteLanguage');
    return LanguageModel.query().deleteById(id);
  }
}
