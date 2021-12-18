import { IAttachment, IPatient, IUser } from '../../../models';
import { IUserLoginParams } from '../../auth';

export interface IPatientService {
  findById(id: string): Promise<IPatient>;

  update(id: string, data: IPatient): Promise<IPatient>;

  create(data: IUser, ip?: string): Promise<IPatient>;

  login(data: IUserLoginParams): Promise<IPatient>;

  uploadAttachment(patientId: string, file: Express.Multer.File): Promise<IAttachment>;

  findPatientVideoBroadcast(patientId: string): Promise<any>;
}
