import { inject, injectable } from 'inversify';
import TYPES from '../../config/types';
import { IAppointment, IFhirAppointment, IFhirServer } from '../../models';
import { GenericResponseError, logger } from '../../utils';
import { IAppointmentRepository } from '../../repository';
// import { IAttachment, IFhirServer, IFindUser, IPatient, IPatientWithToken, IUser } from '../../models';
// import {
//   error,
//   forWho,
//   GenericResponseError,
//   getE164Format,
//   IUtilityService, logger,
//   NotFoundError,
//   throwError,
// } from '../../utils';
import { IAppointmentService } from './interfaces';

@injectable()
export class AppointmentService implements IAppointmentService {
  @inject(TYPES.AppointmentRepository)
  private appointmentRepository: IAppointmentRepository;

  // @inject(TYPES.UtilityService)
  // private readonly utilService: IUtilityService;

  // @inject(TYPES.UserService)
  // private readonly userService: IUserService;

  @inject(TYPES.FhirServerService)
  private readonly fhirServerService: IFhirServer;

  // public async findById(id: string): Promise<IFhirAppointment> {
  //   logger.info('Running AppointmentService.findById');
  //   const appointment = await this.fhirServerService.executeQuery(`/Appointment/${id}`, 'GET');

  //   return appointment.data;
  // }

  public async update(id: string, data: IAppointment): Promise<IAppointment> {
    logger.info('Running AppointmentService.update');
    try {

      // const { data: appointmentUpdatedData } = await this.fhirServerService.executeQuery(
      //   `/Appointment/${id}`,
      //   'PUT',
      //   { data }
      // );

      // then use appointmentUpdatedData to update the database
      return this.appointmentRepository.update<IAppointment>(id, data);

      // logger.info(`Successfully updated appointment data with an id - ${id}`);
      // return appointmentUpdatedData;
      
    } catch (e: any) {
      throw new GenericResponseError(e.message, e.code);
    }
  }

  public async create(data: IAppointment): Promise<IAppointment> {
    logger.info('Running AppointmentService.create');

    const appointmentData: IFhirAppointment = {
      resourceType: 'Appointment',
      status: 'proposed',
      priority: 6,
      description: data.description,
      // created: new Date().toISOString().slice(0, 10),
      created: new Date(),
      participant: [
        {
          actor: {
            reference: 'Patient/example',
            display: 'Peter James Chalmers'
          }
        }
      ]
    };

    const appointmentResponse = await this.fhirServerService.executeQuery('/Appointment', 'POST', { data: appointmentData });
    const appointment = appointmentResponse.data;

    // create data in the db
    return await this.appointmentRepository.create<IAppointment>({
      resource_id: appointment.id,
      ...data
    });
    
  }


}
