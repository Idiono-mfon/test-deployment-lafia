import { injectable } from 'inversify';
import { AppointmentResponseModel, IAppointmentResponse } from '../../models';
import { InternalServerError, logger } from '../../utils';
import { BaseRepository } from '../base';
import { IAppointmentResponseRepository } from './interfaces';

@injectable()
export class AppointmentResponseRepository extends BaseRepository implements IAppointmentResponseRepository {

  constructor() {
    super(AppointmentResponseModel);
  }

  public async getAppointmentResponseByResourceId(resource_id: string): Promise<IAppointmentResponse | undefined> {
    logger.info('Running AppointmentResponseRepository.getAppointmentResponseByResourceId');
    try {
      return await AppointmentResponseModel.query()
        .where('resource_id', resource_id)
        .first();
    } catch (e: any) {
      throw new InternalServerError(e.message);
    }
  }

  // public async create(data: IAppointmentResponse): Promise<IAppointmentResponse> {

  // }

  public async update<T = IAppointmentResponse>(id: string, data: T): Promise<IAppointmentResponse> {
    logger.info('Running AppointmentResponseRepository.update');
    try {
      const result = await AppointmentResponseModel.query()
        .patch(data)
        .where({ resource_id: id })
        .returning('*');

      const appointment_response = result as unknown as IAppointmentResponse;

      return appointment_response as IAppointmentResponse;
    } catch (e: any) {
      throw new InternalServerError(e.message);
    }
  }

}
