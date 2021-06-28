import { inject } from "inversify";
import { Request, Response } from 'express';
import { controller, httpDelete, httpGet, httpPost, httpPut, request, response } from "inversify-express-utils";
import TYPES from "../../config/types";
import { ILangauge } from "../../models/lang/interfaces";
import { LanguageService } from "../../services";
import { BaseController } from "../baseController";

@controller('/language')
export class LanguageController extends BaseController {
  @inject(TYPES.LanguageService)
  private readonly languageService: LanguageService;

    @httpGet('')
    public async fetchLanguages(@request() req: Request, @response() res: Response) {
        try {
            const languages = await this.languageService.fetchLanguage();
            this.success(res, languages, 'Language successfully fetched');
        } catch (e) {
            this.error(res, e);
        }
    }

    @httpPost('')
    public async createLanguage(@request() req: Request, @response() res: Response) {
        try {
            const languageData: ILangauge = req.body;
            const language = await this.languageService.addLanguage(languageData);
            this.success(res, language, 'Language successfully added');
        } catch (e) {
            this.error(res, e);
        }
    }  

    @httpPut('/:id')
    public async updateLanguage(@request() req: Request, @response() res: Response) {
        try {
            const { id } = req.params;
            const languageData: ILangauge = req.body;

            const language = await this.languageService.updateLanguage(id, languageData);

            this.success(res, language, 'Language successfully updated');
        } catch (e) {
            this.error(res, e);
        }
    }  

    @httpDelete('/:id')
    public async deleteLanguage(@request() req: Request, @response() res: Response) {
        try {
            const { id } = req.params;

            const language = await this.languageService.deleteLanguage(id);

            this.success(res, language, 'Language successfully updated');
        } catch (e) {
            this.error(res, e);
        }
    }  

}
