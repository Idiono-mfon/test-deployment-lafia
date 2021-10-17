import { inject } from 'inversify';
import { Request, Response } from 'express';
import { controller, httpDelete, httpGet, httpPost, httpPut, request, response } from 'inversify-express-utils';
import TYPES from '../../config/types';
import { ILangauge, ILangaugeLabel, ILanguageComponent } from '../../models/lang/interfaces';
import { LanguageService } from '../../services';
import { logger } from '../../utils';
import { BaseController } from '../baseController';

@controller('/language')
export class LanguageController extends BaseController {
  @inject(TYPES.LanguageService)
  private readonly languageService: LanguageService;

  @httpGet('')
  public async fetchLanguages(@request() req: Request, @response() res: Response) {
    logger.info('Running LanguageController::fetchLanguages');
    try {
      const languages = await this.languageService.fetchLanguage();
      this.success(res, languages, 'Languages successfully fetched');
    } catch (e: any) {
      logger.error(`Unable to fetch languages -`, e);
      this.error(res, e);
    }
  }

  @httpGet('/:code/contents')
  public async fetchLanguagesWithContent(@request() req: Request, @response() res: Response) {
    logger.info('Running LanguageController::fetchLanguagesWithContent');
    try {
      const { code } = req.params;
      const languages: ILangauge = await this.languageService.fetchLanguagesWithContent(code);

      const labels: object | any = {};
      languages.labels?.forEach((label: any) => {
        labels[label.name] = label.components[0]?.fields // TODO: normmally label should have many component, but the front end is restricting me to to this format.
      });
      languages.labels! = labels;
      this.success(res, languages, 'Language successfully fetched');
    } catch (e: any) {
      logger.error(`Unable to fetch languages with content -`, e);
      this.error(res, e);
    }
  }

  @httpPost('')
  public async createLanguage(@request() req: Request, @response() res: Response) {
    logger.info('Running LanguageController::createLanguage');
    try {
      const languageData: ILangauge = req.body;
      const language = await this.languageService.addLanguage(languageData);
      this.success(res, language, 'Language successfully added');
    } catch (e: any) {
      logger.error(`Unable to create language -`, e);
      this.error(res, e);
    }
  }

  @httpPost('/label')
  public async attachLabel(@request() req: Request, @response() res: Response) {
    logger.info('Running LanguageController::attachLabel');
    try {
      const languageData: ILangaugeLabel = req.body;
      const label = await this.languageService.attachLabelToLanguage(languageData.languageId, languageData.labelId);
      this.success(res, label, 'Label successfully added to language');
    } catch (e: any) {
      logger.error(`Unable to attach label to language -`, e);
      this.error(res, e);
    }
  }


  @httpPost('/component')
  public async attachComponent(@request() req: Request, @response() res: Response) {
    logger.info('Running LanguageController::attachComponent');
    try {
      const LanguageComponentData: ILanguageComponent = req.body;
      const label = await this.languageService.attachComponentToLanguage(LanguageComponentData.languageId, LanguageComponentData.componentId);
      this.success(res, label, 'Component successfully added to language');
    } catch (e: any) {
      logger.error(`Unable to attach component to language -`, e);
      this.error(res, e);
    }
  }

  @httpPut('/:id')
  public async updateLanguage(@request() req: Request, @response() res: Response) {
    logger.info('Running LanguageController::updateLanguage');
    try {
      const { id } = req.params;
      const languageData: ILangauge = req.body;

      const language = await this.languageService.updateLanguage(id, languageData);

      this.success(res, language, 'Language successfully updated');
    } catch (e: any) {
      logger.error(`Unable to update language -`, e);
      this.error(res, e);
    }
  }

  @httpDelete('/:id')
  public async deleteLanguage(@request() req: Request, @response() res: Response) {
    logger.info('Running LanguageController::deleteLanguage');
    try {
      const { id } = req.params;

      const language = await this.languageService.deleteLanguage(id);

      this.success(res, language, 'Language successfully updated');
    } catch (e: any) {
      logger.error(`Unable to delete language -`, e);
      this.error(res, e);
    }
  }

  @httpDelete('/component')
  public async detachComponent(@request() req: Request, @response() res: Response) {
    logger.info('Running LanguageController::detachComponent');
    try {
      const LanguageComponentData: ILanguageComponent = req.body;
      const language = await this.languageService.detachComponentFromLanguage(LanguageComponentData.languageId, LanguageComponentData.componentId);
      this.success(res, language, 'Component successfully removed from language');
    } catch (e: any) {
      logger.error(`Unable to detach component from language -`, e);
      this.error(res, e);
    }
  }

  @httpDelete('/label')
  public async detachLabel(@request() req: Request, @response() res: Response) {
    logger.info('Running LanguageController::detachLabel');
    try {
      const languageData: ILangaugeLabel = req.body;
      const label = await this.languageService.attachComponentToLabel(languageData.languageId, languageData.labelId);
      this.success(res, label, 'Label successfully removed from language');
    } catch (e: any) {
      logger.error(`Unable to detach label from language -`, e);
      this.error(res, e);
    }
  }

}
