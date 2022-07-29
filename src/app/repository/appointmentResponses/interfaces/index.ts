import { IAppointmentResponse } from '../../../models';
import { DbAccess } from '../../base';

export interface IAppointmentResponseRepository extends DbAccess {
  getAppointmentResponseByResourceId(resource_id: string): Promise<IAppointmentResponse | undefined>
}
