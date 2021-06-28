import { inject } from "inversify";
import { Request, Response } from 'express';
import { controller, httpDelete, httpGet, httpPost, httpPut, request, response } from "inversify-express-utils";
import TYPES from "../../config/types";
import { ILabel } from "../../models/lang/interfaces";
import { LanguageService } from "../../services";
import { BaseController } from "../baseController";

@controller('/labels')
export class LabelController extends BaseController {
  @inject(TYPES.LanguageService)
  private readonly languageService: LanguageService;

    @httpGet('')
    public async fetchLabels(@request() req: Request, @response() res: Response) {
        try {
            const Labels = await this.languageService.fetchLabel();
            this.success(res, Labels, 'Label successfully fetched');
        } catch (e) {
            this.error(res, e);
        }
    }

    @httpPost('')
    public async createLabel(@request() req: Request, @response() res: Response) {
        try {
            const LabelData: ILabel = req.body;
            const label = await this.languageService.addLabel(LabelData);

            this.success(res, label, 'Label successfully added');
        } catch (e) {
            this.error(res, e);
        }
    }  

    @httpPut('/:id')
    public async updateLabel(@request() req: Request, @response() res: Response) {
        try {
            const { id } = req.params;
            const labelData: ILabel = req.body;
            const label = await this.languageService.updateLabel(id, labelData);
            this.success(res, label, 'Label successfully updated');
        } catch (e) {
            this.error(res, e);
        }
    }  

    @httpDelete('/:id')
    public async deleteLabel(@request() req: Request, @response() res: Response) {
        try {
            const { id } = req.params;
            const label = await this.languageService.deleteLabel(id);
            this.success(res, label, 'Label successfully updated');
        } catch (e) {
            this.error(res, e);
        }
    }  

}
