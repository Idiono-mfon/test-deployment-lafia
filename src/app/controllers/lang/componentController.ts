import { Request, Response } from 'express';
import { inject } from 'inversify';
import { controller, httpDelete, httpGet, httpPost, httpPut, request, response } from 'inversify-express-utils';
import TYPES from '../../config/types';
import { IComponent } from '../../models/lang/interfaces';
import { LanguageService } from '../../services';
import { logger } from '../../utils';
import { BaseController } from '../baseController';

@controller('/component')
export class ComponentController extends BaseController {
  @inject(TYPES.LanguageService)
  private readonly languageService: LanguageService;

  @httpGet('')
  public async fetchComponents(@request() req: Request, @response() res: Response) {
    logger.info('Running ComponentController::fetchComponents');
    try {
      const components = await this.languageService.fetchComponent();
      this.success(res, components, 'Components successfully fetched');
    } catch (e: any) {
      logger.error(`Unable to fetch components -`, e);
      this.error(res, e);
    }
  }

  @httpPost('')
  public async createComponent(@request() req: Request, @response() res: Response) {
    logger.info('Running ComponentController::createComponent');
    try {
      const componentData: IComponent = req.body;
      const component = await this.languageService.addComponent(componentData);
      this.success(res, component, 'Component successfully added');
    } catch (e: any) {
      logger.error(`Unable to create components -`, e);
      this.error(res, e);
    }
  }

  @httpPut('/:id')
  public async updateComponent(@request() req: Request, @response() res: Response) {
    logger.info('Running ComponentController::updateComponent');
    try {
      const { id } = req.params;
      const componentData: IComponent = req.body;
      const component = await this.languageService.updateComponent(id, componentData);

      this.success(res, component, 'Component successfully updated');
    } catch (e: any) {
      logger.error(`Unable to update components -`, e);
      this.error(res, e);
    }
  }

  @httpDelete('/:id')
  public async deleteComponent(@request() req: Request, @response() res: Response) {
    logger.info('Running ComponentController::deleteComponent');
    try {
      const { id } = req.params;
      const component = await this.languageService.deleteComponent(id);
      this.success(res, component, 'Component successfully updated');
    } catch (e: any) {
      logger.error(`Unable to delete components -`, e);
      this.error(res, e);
    }
  }

}
