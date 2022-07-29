import { IAppointment } from '../../../models';
import { DbAccess } from '../../base';

export interface IAppointmentRepository extends DbAccess {
    getAppointmentByResourceId(resource_id: string): Promise<IAppointment | undefined>
}
