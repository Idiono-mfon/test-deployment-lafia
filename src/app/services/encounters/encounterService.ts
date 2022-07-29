import { inject, injectable } from 'inversify';
import TYPES from '../../config/types';
import { IEncounter, IFhirEncounter, IFhirServer } from '../../models';
import { GenericResponseError, logger } from '../../utils';
import { IEncounterRepository } from '../../repository';
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
import { IEncounterService } from './interfaces';

@injectable()
export class EncounterService implements IEncounterService {
  @inject(TYPES.EncounterRepository)
  private encounterRepository: IEncounterRepository;

  // @inject(TYPES.UtilityService)
  // private readonly utilService: IUtilityService;

  // @inject(TYPES.UserService)
  // private readonly userService: IUserService;

  @inject(TYPES.FhirServerService)
  private readonly fhirServerService: IFhirServer;

  public async findById(id: string): Promise<IFhirEncounter> {
    logger.info('Running EncounterService.findById');
    const encounter = await this.fhirServerService.executeQuery(`/Encounter/${id}`, 'GET');

    return encounter.data;
  }

  public async update(id: string, data: IEncounter): Promise<IEncounter> {
    logger.info('Running EncounterService.update');
    try {

      // const { data: encounterUpdatedData } = await this.fhirServerService.executeQuery(
      //   `/Encounter/${id}`,
      //   'PUT',
      //   { data }
      // );

      // then use encounterUpdatedData to update the database
      return this.encounterRepository.update<IEncounter>(id, data);

      // logger.info(`Successfully updated encounter data with an id - ${id}`);
      // return encounterUpdatedData;
      
    } catch (e: any) {
      throw new GenericResponseError(e.message, e.code);
    }
  }

  public async createFromERPNext(data: IEncounter): Promise<IEncounter> {
    logger.info('Running EncounterService.createFromERPNext');

    try {
      // create data in the db
      return await this.encounterRepository.create<IEncounter>(data);
    } catch (e: any) {
      throw new GenericResponseError(e.message, e.code);
    }
  }

  public async create(data: IEncounter): Promise<IEncounter> {
    logger.info('Running EncounterService.create');

    try {
      const encounterData: IFhirEncounter = {
        resourceType: 'Encounter',
        id: data.resource_id,
        subject: {
          reference: `Patient/${data.subject}`,
        },
        participant: [
          {
            individual: {
              reference: `Practitioner/${data.participant}`,
            }
          }
        ],
        serviceProvider: {
          reference: `Organization/${data.service_provider}`,
        },
        status: data.status,
        // period: {
        //   start: data.start,
        //   end: data.end
        // },
        class: {
          display: data.class
        },
        // serviceType: {
        //   coding: [
        //     {
        //       display: data.service_type
        //     }
        //   ]
        // },
        // reasonCode: [
        //   {
        //     text: data.reason_description,
        //     coding: [
        //       {
        //         code: data.reason_code
        //       }
        //     ]
        //   }
        // ]
      };

      const encounterResponse = await this.fhirServerService.executeQuery(
        'Encounter', 
        'POST', 
        { data: encounterData }
      );
      const encounter = encounterResponse.data;
      // console.log(encounter);

      // create data in the db
      return await this.encounterRepository.create<IEncounter>({
        resource_id: encounter.id,
        ...data
      });
    } catch (e: any) {
      throw new GenericResponseError(e.message, e.code);
    }
  }

  public async createFromFhir(fhirData: IFhirEncounter) {
    logger.info('Running EncounterService.createFromFhir');

    try {
      // console.log('fhirData', fhirData);
      delete fhirData.meta;
      delete fhirData.participant;
      const encounterResponse = await this.fhirServerService.executeQuery(
        'Encounter',
        'POST',
        { data: fhirData }
      );
      logger.info('Back from fhir server');
      // console.log(encounterResponse);
      const encounter = encounterResponse.data;

      console.log(encounter);

      const dbData: IEncounter = {
        resource_id: encounter.id,
        resource_type: encounter.resourceType,
        subject: encounter.subject.reference,
        service_provider: encounter.serviceProvider.reference
      };

      // create data in the db
      return await this.encounterRepository.create<IEncounter>(dbData);
      
    } catch (e: any) {
      throw new GenericResponseError(e.message, e.code);
    }
  }

}