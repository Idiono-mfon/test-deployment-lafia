import { inject, injectable } from 'inversify';
import TYPES from '../../config/types';
import { IOrganization, IFhirOrganization, IFhirServer } from '../../models';
import { GenericResponseError, logger } from '../../utils';
import { IOrganizationRepository } from '../../repository';
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
import { IOrganizationService } from './interfaces';

@injectable()
export class OrganizationService implements IOrganizationService {
  @inject(TYPES.OrganizationRepository)
  private organizationRepository: IOrganizationRepository;

  // @inject(TYPES.UtilityService)
  // private readonly utilService: IUtilityService;

  // @inject(TYPES.UserService)
  // private readonly userService: IUserService;

  // @inject(TYPES.FhirServerService)
  // private readonly fhirServerService: IFhirServer;

  // public async findById(id: string): Promise<IFhirOrganization> {
  //   logger.info('Running OrganizationService.findById');
  //   const organization = await this.fhirServerService.executeQuery(`/Organization/${id}`, 'GET');

  //   return organization.data;
  // }

  public async update(id: string, data: IOrganization): Promise<IOrganization> {
    logger.info('Running OrganizationService.update');
    try {

      // const { data: organizationUpdatedData } = await this.fhirServerService.executeQuery(
      //   `/Organization/${id}`,
      //   'PUT',
      //   { data }
      // );

      // then use organizationUpdatedData to update the database
      return this.organizationRepository.update<IOrganization>(id, data);

      // logger.info(`Successfully updated Organization data with an id - ${id}`);
      // return organizationUpdatedData;
      
    } catch (e: any) {
      throw new GenericResponseError(e.message, e.code);
    }
  }

  public async createFromERPNext(data: IOrganization): Promise<IOrganization> {
    logger.info('Running OrganizationService.createFromERPNext');

    // create data in the db
    return await this.organizationRepository.create<IOrganization>(data);
  }

  public async create(data: IOrganization): Promise<IOrganization> {
    logger.info('Running OrganizationService.create');

    // create data in the db
    return await this.organizationRepository.create<IOrganization>(data);
  }


}
