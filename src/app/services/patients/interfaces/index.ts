import {
  IAttachment,
  IPatient,
  IPatientWithToken,
  IUser,
  ICreatePatientDto,
} from '../../../models';
import { IUserLoginParams } from '../../auth';

export interface IPatientService {
  findById(id: string): Promise<IPatient>;

  update(id: string, data: IPatient): Promise<IPatient>;

  create(data: ICreatePatientDto, ip?: string): Promise<IPatientWithToken>;

  login(data: IUserLoginParams): Promise<IPatient>;

  uploadAttachment(patientId: string, file: Express.Multer.File): Promise<IAttachment>;

  findPatientVideoBroadcast(patientId: string): Promise<any>;
}
