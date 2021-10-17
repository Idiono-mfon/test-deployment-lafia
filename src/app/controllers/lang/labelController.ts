import { inject } from 'inversify';
import { Request, Response } from 'express';
import { controller, httpDelete, httpGet, httpPost, httpPut, request, response } from 'inversify-express-utils';
import TYPES from '../../config/types';
import { ILabel, ILabelComponent } from '../../models/lang/interfaces';
import { LanguageService } from '../../services';
import { logger } from '../../utils';
import { BaseController } from '../baseController';

@controller('/labels')
export class LabelController extends BaseController {
  @inject(TYPES.LanguageService)
  private readonly languageService: LanguageService;

  @httpGet('')
  public async fetchLabels(@request() req: Request, @response() res: Response) {
    logger.info('Running LabelController::fetchLabels');
    try {
      const Labels = await this.languageService.fetchLabel();
      this.success(res, Labels, 'Label successfully fetched');
    } catch (e: any) {
      logger.error(`Unable to fetch labels -`, e);
      this.error(res, e);
    }
  }

  @httpPost('')
  public async createLabel(@request() req: Request, @response() res: Response) {
    logger.info('Running LabelController::createLabel');
    try {
      const LabelData: ILabel = req.body;
      const label = await this.languageService.addLabel(LabelData);
      this.success(res, label, 'Label successfully added');
    } catch (e: any) {
      logger.error(`Unable to create label -`, e);
      this.error(res, e);
    }
  }

  @httpPost('/component')
  public async attachComponent(@request() req: Request, @response() res: Response) {
    logger.info('Running LabelController::attachComponent');
    try {
      const LabelData: ILabelComponent = req.body;
      const label = await this.languageService.attachComponentToLabel(LabelData.labelId, LabelData.componentId);
      this.success(res, label, 'Component successfully added to label');
    } catch (e: any) {
      logger.error(`Unable to attach component -`, e);
      this.error(res, e);
    }
  }

  @httpPut('/:id')
  public async updateLabel(@request() req: Request, @response() res: Response) {
    logger.info('Running LabelController::updateLabel');
    try {
      const { id } = req.params;
      const labelData: ILabel = req.body;
      const label = await this.languageService.updateLabel(id, labelData);
      this.success(res, label, 'Label successfully updated');
    } catch (e: any) {
      logger.error(`Unable to update label -`, e);
      this.error(res, e);
    }
  }

  @httpDelete('/component')
  public async detachComponent(@request() req: Request, @response() res: Response) {
    logger.info('Running LabelController::detachComponent');
    try {
      const LabelData: ILabelComponent = req.body;
      const label = await this.languageService.detachComponentFromLabel(LabelData.labelId, LabelData.componentId);
      this.success(res, label, 'Component successfully removed from label');
    } catch (e: any) {
      logger.error(`Unable to detach component -`, e);
      this.error(res, e);
    }
  }

  @httpDelete('/:id')
  public async deleteLabel(@request() req: Request, @response() res: Response) {
    logger.info('Running LabelController::deleteLabel');
    try {
      const { id } = req.params;
      const label = await this.languageService.deleteLabel(id);
      this.success(res, label, 'Label successfully updated');
    } catch (e: any) {
      logger.error(`Unable to delete label -`, e);
      this.error(res, e);
    }
  }

}
