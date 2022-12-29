import {
  IAttachment,
  IPractitioner,
  ICreatePractitionerDto,
  IPractitionerWithToken,
} from '../../../models';
import { IUserLoginParams } from '../../auth';
import { File } from '../../aws';

export interface IPractitionerService {
  update(id: string, data: any): Promise<IPractitioner>;

  findById(id: string): Promise<IPractitioner>;

  create(data: ICreatePractitionerDto): Promise<IPractitionerWithToken>;

  login(data: IUserLoginParams): Promise<any>;

  uploadAttachment(practitionerId: string, file: File): Promise<IAttachment>;

  findAssignedPractitionerVideoBroadcast(practitionerId: string): Promise<any>;
}
