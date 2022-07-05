import { injectable } from 'inversify';
import { AppointmentModel, IAppointment } from '../../models';
import { InternalServerError, logger } from '../../utils';
import { BaseRepository } from '../base';
import { IAppointmentRepository } from './interfaces';

@injectable()
export class AppointmentRepository extends BaseRepository implements IAppointmentRepository {

  constructor() {
    super(AppointmentModel);
  }

  public async getAppointmentByResourceId(resource_id: string): Promise<IAppointment | undefined> {
    logger.info('Running AppointmentRepository.getAppointmentByResourceId');
    try {
      return await AppointmentModel.query()
        .where('resource_id', resource_id)
        .first();
    } catch (e: any) {
      throw new InternalServerError(e.message);
    }
  }

  // public async create(data: IAppointment): Promise<IAppointment> {

  // }

  public async update<T = IAppointment>(id: string, data: T): Promise<IAppointment> {
    logger.info('Running AppointmentRepository.update');
    try {
      const result = await AppointmentModel.query()
        .patch(data)
        .where({ resource_id: id })
        .returning('*');

      const appointment = result as unknown as IAppointment;

      return appointment as IAppointment;
    } catch (e: any) {
      throw new InternalServerError(e.message);
    }
  }

}
