import { IAppointmentResponse, IFhirAppointmentResponse } from '../../../models';

export interface IAppointmentResponseService {
//   findById(id: string): Promise<IFhirAppointmentResponse>;

//   update(id: string, data: IAppointmentResponse): Promise<IFhirAppointmentResponse>;

  create(data: IAppointmentResponse): Promise<IAppointmentResponse>;
  createFromERPNext(data: IAppointmentResponse): Promise<IAppointmentResponse>;
}
