import { inject } from "inversify";
import { Request, Response } from 'express';
import { controller, httpDelete, httpGet, httpPost, httpPut, request, response } from "inversify-express-utils";
import TYPES from "../../config/types";
import { ILabel, ILangauge, ILangaugeLabel } from "../../models/lang/interfaces";
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
            this.success(res, languages, 'Languages successfully fetched');
        } catch (e) {
            this.error(res, e);
        }
    }

    @httpGet('/:code/contents')
    public async fetchLanguagesWithContent(@request() req: Request, @response() res: Response) {
        try {
            const { code } = req.params;
            const languages: ILangauge = await this.languageService.fetchLanguagesWithContent(code);
            const labels: object | any = {}; 
            languages.labels?.forEach( (label: any) => { 
                labels[label.name] = label.components[0].fields // TODO: normmally label should have many component, but the front end is restricting me to to this format. 
            } );
            languages.labels! = labels;
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
    
    @httpPost('/label')
    public async attachComponent(@request() req: Request, @response() res: Response) {
        try {
            const languageData: ILangaugeLabel = req.body;
            const label = await this.languageService.attachLabelToLanguage(languageData.languageId, languageData.labelId);
            this.success(res, label, 'Label successfully added to language');
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

    @httpDelete('/label')
    public async detachComponent(@request() req: Request, @response() res: Response) {
        try {
            const languageData: ILangaugeLabel = req.body;
            const label = await this.languageService.attachComponentToLabel(languageData.languageId, languageData.labelId);
            this.success(res, label, 'Label successfully removed from language');
        } catch (e) {
            this.error(res, e);
        }
    } 

}
