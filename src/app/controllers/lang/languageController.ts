import { inject } from 'inversify';
import { Request, Response } from 'express';
import { controller, httpDelete, httpGet, httpPost, httpPut, request, response } from 'inversify-express-utils';
import TYPES from '../../config/types';
import { ILanguage, ILanguageLabel, ILanguageComponent } from '../../models';
import { ILanguageService } from '../../services';
import { logger } from '../../utils';
import { BaseController } from '../baseController';

@controller('/language')
export class LanguageController extends BaseController {
  @inject(TYPES.LanguageService)
  private readonly languageService: ILanguageService;

  @httpGet('')
  public async fetchLanguages(@request() req: Request, @response() res: Response) {
    logger.info('Running LanguageController.findAll');
    try {
      const languages = await this.languageService.findAll();
      this.success(res, languages, 'Languages successfully fetched');
    } catch (e: any) {
      logger.error(`Unable to fetch languages -`, e);
      this.error(res, e);
    }
  }

  @httpGet('/:code/contents')
  public async fetchLanguagesWithContent(@request() req: Request, @response() res: Response) {
    logger.info('Running LanguageController.findLanguagesWithContent');
    try {
      const { code } = req.params;
      const languages: ILanguage = await this.languageService.findLanguagesWithContent(code);

      const labels: object | any = {};

      // TODO: normally label should have many component, but the front end is restricting me to to this format.
      languages.labels?.forEach((label: any) => {
        labels[label.name] = label.components[0]?.fields
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
    logger.info('Running LanguageController.createLanguage');
    try {
      const languageData: ILanguage = req.body;
      const language = await this.languageService.create(languageData);
      this.success(res, language, 'Language successfully added');
    } catch (e: any) {
      logger.error(`Unable to create language -`, e);
      this.error(res, e);
    }
  }

  @httpPost('/label')
  public async attachLabel(@request() req: Request, @response() res: Response) {
    logger.info('Running LanguageController.attachLabel');
    try {
      const languageData: ILanguageLabel = req.body;
      const label = await this.languageService.attachLabelToLanguage(languageData.languageId, languageData.labelId);
      this.success(res, label, 'Label successfully added to language');
    } catch (e: any) {
      logger.error(`Unable to attach label to language -`, e);
      this.error(res, e);
    }
  }


  @httpPost('/component')
  public async attachComponent(@request() req: Request, @response() res: Response) {
    logger.info('Running LanguageController.attachComponent');
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
    logger.info('Running LanguageController.update');
    try {
      const { id } = req.params;
      const languageData: ILanguage = req.body;

      const language = await this.languageService.update(id, languageData);

      this.success(res, language, 'Language successfully updated');
    } catch (e: any) {
      logger.error(`Unable to update language -`, e);
      this.error(res, e);
    }
  }

  @httpDelete('/:id')
  public async deleteLanguage(@request() req: Request, @response() res: Response) {
    logger.info('Running LanguageController.delete');
    try {
      const { id } = req.params;

      const language = await this.languageService.delete(id);

      this.success(res, language, 'Language successfully updated');
    } catch (e: any) {
      logger.error(`Unable to delete language -`, e);
      this.error(res, e);
    }
  }

  @httpDelete('/component')
  public async detachComponent(@request() req: Request, @response() res: Response) {
    logger.info('Running LanguageController.detachComponent');
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
    logger.info('Running LanguageController.detachLabel');
    try {
      const languageData: ILanguageLabel = req.body;
      const label = await this.languageService.attachComponentToLabel(languageData.languageId, languageData.labelId);
      this.success(res, label, 'Label successfully removed from language');
    } catch (e: any) {
      logger.error(`Unable to detach label from language -`, e);
      this.error(res, e);
    }
  }

}
