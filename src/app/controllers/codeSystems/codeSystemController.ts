import { Request, Response } from 'express';
import { inject } from 'inversify';
import {
  controller,
  httpGet,
  request,
  response
} from 'inversify-express-utils';
import TYPES from '../../config/types';
import { ICodeSystem } from '../../models/codeSystems';
import { CodeSystemService } from '../../services/codeSystems';
import { BaseController } from '../baseController';

@controller('/systems')
export class CodeSystemController extends BaseController {
  @inject(TYPES.CodeSystemService)
  private readonly codeSystemService: CodeSystemService;

  @httpGet('/marital_status')
  public async getMaritalStatus(@request() req: Request, @response() res: Response): Promise<void> {
    try {
      const type = 'marital_status';
      const maritalStatus: ICodeSystem[] = await this.codeSystemService.getCodeSystemByType(type);

      this.success(res, maritalStatus, 'Request Successful');
    } catch (e) {
      this.error(res, e);
    }
  }

  @httpGet('/languages')
  public async getLanguages(@request() req: Request, @response() res: Response): Promise<void> {
    try {
      const type = 'language';
      const languages: ICodeSystem[] = await this.codeSystemService.getCodeSystemByType(type);

      this.success(res, languages, 'Request Successful');
    } catch (e) {
      this.error(res, e);
    }
  }

  @httpGet('/relationships')
  public async getRelationships(@request() req: Request, @response() res: Response): Promise<void> {
    try {
      const type = 'relationship';
      const relationships: ICodeSystem[] = await this.codeSystemService.getCodeSystemByType(type);

      this.success(res, relationships, 'Request Successful');
    } catch (e) {
      this.error(res, e);
    }
  }
}
