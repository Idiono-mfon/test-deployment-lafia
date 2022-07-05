import { inject, injectable } from 'inversify';
import TYPES from '../../config/types';
import { IAppointmentResponse, IFhirAppointmentResponse, IFhirServer } from '../../models';
import { GenericResponseError, logger } from '../../utils';
import { IAppointmentResponseRepository } from '../../repository';
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
import { IAppointmentResponseService } from './interfaces';

@injectable()
export class AppointmentResponseService implements IAppointmentResponseService {
  @inject(TYPES.AppointmentResponseRepository)
  private appointmentResponseRepository: IAppointmentResponseRepository;

  // @inject(TYPES.UtilityService)
  // private readonly utilService: IUtilityService;

  // @inject(TYPES.UserService)
  // private readonly userService: IUserService;

  @inject(TYPES.FhirServerService)
  private readonly fhirServerService: IFhirServer;

  // public async findById(id: string): Promise<IFhirAppointmentResponse> {
  //   logger.info('Running AppointmentResponseService.findById');
  //   const appointment_response = await this.fhirServerService.executeQuery(`/AppointmentResponse/${id}`, 'GET');

  //   return appointment_response.data;
  // }

  public async update(id: string, data: IAppointmentResponse): Promise<IAppointmentResponse> {
    logger.info('Running AppointmentResponseService.update');
    try {
      // const { data: appointmentResponseUpdatedData } = await this.fhirServerService.executeQuery(
      //   `/AppointmentResponse/${id}`,
      //   'PUT',
      //   { data }
      // );

      // then use appointmentUpdatedData to update the database
      return this.appointmentResponseRepository.update<IAppointmentResponse>(id, data);

      // logger.info(`Successfully updated appointment response data with an id - ${id}`);
      // return appointmentResponseUpdatedData;
      
    } catch (e: any) {
      throw new GenericResponseError(e.message, e.code);
    }
  }

  public async create(data: IAppointmentResponse): Promise<IAppointmentResponse> {
    logger.info('Running AppointmentResponseService.create');

    const appointmentResponseData: IFhirAppointmentResponse = {
      resourceType: 'AppointmentResponse',
      appointment: {
        reference: data.appointment
      },
      actor: {
        reference: data.practitioner_participant
      }, 
      participantStatus: data.participant_status
    };

    const appointmentResponseReturn = await this.fhirServerService.executeQuery(
      '/AppointmentResponse', 
      'POST', 
      { data: appointmentResponseData }
    );
    const appointmentResponse = appointmentResponseReturn.data;

    // create data in the db
    return await this.appointmentResponseRepository.create<IAppointmentResponse>({
      resource_id: appointmentResponse.id,
      ...data
    });
  }


}
