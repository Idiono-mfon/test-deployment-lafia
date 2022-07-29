import * as fs from "fs";
import { parse } from 'csv-parse';
import { id, inject, injectable } from 'inversify';
import TYPES from '../config/types';
import { logger } from './loggerUtil';
import { IClaimCsv, ICsvImporter, IEncounterCsv, IFhirBundle, IFhirImporter } from "./interfaces";
import { IClaim, IEncounter } from "../models";
import { eventName, eventService, IClaimService, IEncounterService } from "../services";
import { GenericResponseError } from "./errors";

@injectable()
export class FhirImporter implements IFhirImporter {
  
  @inject(TYPES.EncounterService)
  private readonly encounterService: IEncounterService;

  @inject(TYPES.EncounterService)
  private readonly claimService: IClaimService;

  public async uploadEncountersFhirData(path: string) {

    try {
      var fileContent = fs.readFileSync(path, { encoding: 'utf-8' });

      const fhirBundle: IFhirBundle = JSON.parse(fileContent);

      for (const resource of fhirBundle.entry) {
        console.log(resource.resource.resourceType);
        if (resource.resource.resourceType == 'Encounter') {
          const encounterData: IEncounter = await this.encounterService.createFromFhir(resource.resource);

          console.log(encounterData);

          // Raise new encounter event
          // eventService.emit(eventName.newEncounter, encounterData?.resource_id, encounterData);
        }
      }


    } catch (e: any) {
      logger.error('Ooops!');
      throw new GenericResponseError(e.message, e.code);
    }
  }

  public async uploadClaimsFhirData(path: string) {

    try {
      var fileContent = fs.readFileSync(path, { encoding: 'utf-8' });

      const fhirBundle: IFhirBundle = JSON.parse(fileContent);

      for (const resource of fhirBundle.entry) {
        console.log(resource.resource.resourceType);
        if (resource.resource.resourceType == 'Claim') {
          const claimData: IClaim = await this.claimService.createFromFhir(resource.resource);

          console.log(claimData);

          // Raise new encounter event
          // eventService.emit(eventName.newClaim, claimData?.resource_id, claimData);
        }
      }


    } catch (e: any) {
      logger.error('Ooops!');
      throw new GenericResponseError(e.message, e.code);
    }
  }

}