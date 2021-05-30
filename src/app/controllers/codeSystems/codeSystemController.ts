import { Request, Response } from 'express';
import { inject } from 'inversify';
import {
  controller,
  httpGet, httpPost,
  request,
  response
} from 'inversify-express-utils';
import TYPES from '../../config/types';
import { CODE_SYSTEM_TYPE, ICodeSystem } from '../../models';
import { CodeSystemService } from '../../services/codeSystems';
import { HttpStatusCode } from '../../utils';
import { BaseController } from '../baseController';

@controller('/systems')
export class CodeSystemController extends BaseController {
  @inject(TYPES.CodeSystemService)
  private readonly codeSystemService: CodeSystemService;

  @httpGet('/marital_status')
  public async getMaritalStatus(@request() req: Request, @response() res: Response): Promise<void> {
    try {
      const maritalStatus: ICodeSystem[] = await this.codeSystemService
        .getCodeSystemByType(CODE_SYSTEM_TYPE.MARITAL_STATUS);

      this.success(res, maritalStatus, 'Request Successful');
    } catch(e) {
      this.error(res, e);
    }
  }

  @httpGet('/languages')
  public async getLanguages(@request() req: Request, @response() res: Response): Promise<void> {
    try {
      const languages: ICodeSystem[] = await this.codeSystemService
        .getCodeSystemByType(CODE_SYSTEM_TYPE.LANGUAGE);

      this.success(res, languages, 'Request Successful');
    } catch(e) {
      this.error(res, e);
    }
  }

  @httpGet('/relationships')
  public async getRelationships(@request() req: Request, @response() res: Response): Promise<void> {
    try {
      const relationships: ICodeSystem[] = await this.codeSystemService
        .getCodeSystemByType(CODE_SYSTEM_TYPE.RELATIONSHIP);

      this.success(res, relationships, 'Request Successful');
    } catch(e) {
      this.error(res, e);
    }
  }

  @httpGet('/qualifications')
  public async getQualifications(@request() req: Request, @response() res: Response): Promise<void> {
    try {
      const qualifications: ICodeSystem[] = await this.codeSystemService
        .getCodeSystemByType(CODE_SYSTEM_TYPE.QUALIFICATION);

      this.success(res, qualifications, 'Request Successful');
    } catch(e) {
      this.error(res, e);
    }
  }

  @httpPost('/systems')
  public async addCodeSystem(@request() req: Request, @response() res: Response): Promise<void> {
    try {
      const data: ICodeSystem = req.body;
      const codeSystem: ICodeSystem = await this.codeSystemService.addCodeSystem(data);

      this.success(res, codeSystem, 'Code system successfully added', HttpStatusCode.CREATED);
    } catch(e) {
      this.error(res, e);
    }
  }

  @httpGet('/durations')
  public async getDurations(@request() req: Request, @response() res: Response): Promise<void> {
    try {
      const durations: ICodeSystem[] = await this.codeSystemService
        .getCodeSystemByType(CODE_SYSTEM_TYPE.DURATION);

      this.success(res, durations, 'Request Successful');
    } catch (e) {
      this.error(res, e);
    }
  }
}
