import { IAttachment, IPractitioner } from '../../../models';
import { IUserLoginParams } from '../../auth';

export interface IPractitionerService {
  update(id: string, data: any): Promise<IPractitioner>;

  findById(id: string): Promise<IPractitioner>;

  create(data: any): Promise<any>;

  login(data: IUserLoginParams): Promise<any>;

  uploadAttachment(practitionerId: string, file: Express.Multer.File): Promise<IAttachment>;
}
