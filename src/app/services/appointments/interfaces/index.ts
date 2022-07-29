import { IAppointment, IFhirAppointment } from '../../../models';

export interface IAppointmentService {
//   findById(id: string): Promise<IFhirAppointment>;

//   update(id: string, data: IAppointment): Promise<IFhirAppointment>;

  create(data: IAppointment): Promise<IAppointment>;

  createFromERPNext(data: IAppointment): Promise<IAppointment>;
}
