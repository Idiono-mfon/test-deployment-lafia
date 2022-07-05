import { inject, injectable } from 'inversify';
import TYPES from '../../config/types';
import { ICareTeam, IFhirCareTeam, IFhirServer } from '../../models';
import { GenericResponseError, logger } from '../../utils';
import { ICareTeamRepository } from '../../repository';
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
import { ICareTeamService } from './interfaces';

@injectable()
export class CareTeamService implements ICareTeamService {
  @inject(TYPES.CareTeamRepository)
  private careTeamRepository: ICareTeamRepository;

  // @inject(TYPES.UtilityService)
  // private readonly utilService: IUtilityService;

  // @inject(TYPES.UserService)
  // private readonly userService: IUserService;

  @inject(TYPES.FhirServerService)
  private readonly fhirServerService: IFhirServer;

  // public async findById(id: string): Promise<IFhirCareTeam> {
  //   logger.info('Running CareTeamService.findById');
  //   const care_Team = await this.fhirServerService.executeQuery(`/CareTeam/${id}`, 'GET');

  //   return care_team.data;
  // }

  public async update(id: string, data: ICareTeam): Promise<ICareTeam> {
    logger.info('Running CareTeamService.update');
    try {

      // const { data: careTeamUpdatedData } = await this.fhirServerService.executeQuery(
      //   `/CareTeam/${id}`,
      //   'PUT',
      //   { data }
      // );

      // then use careTeamUpdatedData to update the database
      return this.careTeamRepository.update<ICareTeam>(id, data);

      // logger.info(`Successfully updated CareTeam data with an id - ${id}`);
      // return careTeamUpdatedData;
      
    } catch (e: any) {
      throw new GenericResponseError(e.message, e.code);
    }
  }

  public async create(data: ICareTeam): Promise<ICareTeam> {
    logger.info('Running CareTeamService.create');

    const careTeamData: IFhirCareTeam = {
      resourceType: 'CareTeam',
      status: data.status,
      subject: {
        reference: `Patient/${data.subject}`
      },
      name: data.name,
      encounter: {
        reference: `Encounter/${data.encounter}`
      }
    };

    const careTeamDataResponse = await this.fhirServerService.executeQuery(
      '/CareTeam',
      'POST',
      { data: careTeamData }
    );
    const careTeamResponse = careTeamDataResponse.data;

    // create data in the db
    return await this.careTeamRepository.create<ICareTeam>({
      resource_id: careTeamResponse.id,
      ...data
    });
  }


}
