import { Request, Response } from 'express';
import { inject } from 'inversify';
import {
  controller,
  httpGet,
  httpPost,
  httpPut,
  request,
  response
} from 'inversify-express-utils';
import TYPES from '../../config/types';
import { uploadFile } from '../../middlewares';
import {
  IAttachment,
  IPractitioner
} from '../../models';
import { PractitionerService } from '../../services';
import { HttpStatusCode } from '../../utils';
import { BaseController } from '../baseController';

@controller('/practitioners')
export class PractitionerController extends BaseController {
  @inject(TYPES.PractitionerService)
  private readonly practitionerService: PractitionerService;

  @httpPut('/:id')
  public async updatePractitioner(@request() req: Request, @response() res: Response) {
    try {
      const { id: practitionerId } = req.params;
      const practitionerData: IPractitioner = req.body;

      const practitioner = await this.practitionerService.updatePractitioner(practitionerId, practitionerData);

      this.success(res, practitioner, 'Practitioner profile successfully updated');
    } catch (e) {
      this.error(res, e);
    }
  }

  @httpGet('/:id')
  public async findPractitionerById(@request() req: Request, @response() res: Response) {
    try {
      const { id } = req.params;
      const practitioner: IPractitioner = await this.practitionerService.findPractitionerById(id);

      this.success(res, practitioner, 'Request completed');
    } catch(e) {
      this.error(res, e);
    }
  }

  @httpPost('')
  public async createPractitioner(@request() req: Request, @response() res: Response) {
    try {
      const practitionerData: any = req.body;
      const practitioner: IPractitioner = await this.practitionerService.createPractitioner(practitionerData);

      this.success(res, practitioner, 'Practitioner registration successful', HttpStatusCode.CREATED);
    } catch(e) {
      this.error(res, e);
    }
  }

  @httpPost('/:id/attachments', uploadFile.single('file'))
  public async uploadAttachment(@request() req: Request, @response() res: Response) {
    try {
      const { id: practitionerId } = req.params;
      const attachment: IAttachment = await this.practitionerService.uploadAttachment(practitionerId, req.file);

      this.success(res, attachment, 'Request completed successfully');
    } catch(e) {
      this.error(res, e);
    }
  }
}
