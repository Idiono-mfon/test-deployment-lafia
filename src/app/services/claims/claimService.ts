import { inject, injectable } from 'inversify';
import TYPES from '../../config/types';
import { IClaim, IFhirClaim, IFhirServer } from '../../models';
import { GenericResponseError, logger } from '../../utils';
import { IClaimRepository } from '../../repository';
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
import { IClaimService } from './interfaces';

@injectable()
export class ClaimService implements IClaimService {
  @inject(TYPES.ClaimRepository)
  private claimRepository: IClaimRepository;

  // @inject(TYPES.UtilityService)
  // private readonly utilService: IUtilityService;

  // @inject(TYPES.UserService)
  // private readonly userService: IUserService;

  @inject(TYPES.FhirServerService)
  private readonly fhirServerService: IFhirServer;

  // public async findById(id: string): Promise<IFhirClaim> {
  //   logger.info('Running ClaimService.findById');
  //   const claim = await this.fhirServerService.executeQuery(`/Claim/${id}`, 'GET');

  //   return claim.data;
  // }

  public async update(id: string, data: IClaim): Promise<IClaim> {
    logger.info('Running ClaimService.update');
    try {

      // const { data: claimUpdatedData } = await this.fhirServerService.executeQuery(
      //   `/Claim/${id}`,
      //   'PUT',
      //   { data }
      // );

      // then use claimUpdatedData to update the database
      return this.claimRepository.update<IClaim>(id, data);

      // logger.info(`Successfully updated claim data with an id - ${id}`);
      // return claimUpdatedData;
      
    } catch (e: any) {
      throw new GenericResponseError(e.message, e.code);
    }
  }

  public async create(data: IClaim): Promise<IClaim> {
    logger.info('Running ClaimService.create');

    try{
      const claimData: IFhirClaim = {
        resourceType: 'Claim',
        status: data.status,
        patient: {
          reference: `Patient/${data.subject}`,
        },
        created: new Date(),
        provider: {
          reference: `Practitioner/${data.provider}`,
        },
        type: {
          text: data.type,
          coding: [
            {
              display: data.type
            }
          ]
        },
        use: data.use,
        billablePeriod: {
          start: data.billable_period_start,
          end: data.billable_period_end
        },
        priority: {
          coding: [
            {
              display: 'stat'
            }
          ]
        },
        insurance: [
          {
            sequence: 0,
            focal: false,
            coverage: {}
          }
        ]
      };

      const claimResponse = await this.fhirServerService.executeQuery(
        '/Claim', 
        'POST', 
        { data: claimData }
      );
      const claim = claimResponse.data;

      // create data in the db
      return await this.claimRepository.create<IClaim>({
        resource_id: claim.id,
        ...data
      });
    } catch (e: any) {
      throw new GenericResponseError(e.message, e.code);
    }

  }

  public async createFromFhir(fhirData: IFhirClaim) {
    logger.info('Running ClaimService.createFromFhir');

    try {
      const claimResponse = await this.fhirServerService.executeQuery(
        '/Claim',
        'POST',
        { data: fhirData }
      );
      const claim = claimResponse.data;

      const dbData: IClaim = {
        resource_id: claim.id,
        resource_type: claim.resourceType,
        status: claim.status,
        subject: claim.patient.reference,
        provider: claim.provider.reference
      }

      // create data in the db
      return await this.claimRepository.create<IClaim>(dbData);
      
    } catch (e: any) {
      throw new GenericResponseError(e.message, e.code);
    }
  }


}
