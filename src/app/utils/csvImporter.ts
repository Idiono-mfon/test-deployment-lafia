import * as fs from "fs";
import { parse } from 'csv-parse';
import { id, inject, injectable } from 'inversify';
import TYPES from '../config/types';
import { logger } from './loggerUtil';
import { IClaimCsv, ICsvImporter, IEncounterCsv } from "./interfaces";
import { IClaim, IEncounter } from "../models";
import { eventName, eventService, IClaimService, IEncounterService } from "../services";
import { GenericResponseError } from "./errors";

@injectable()
export class CsvImporter implements ICsvImporter {
  
  @inject(TYPES.EncounterService)
  private readonly encounterService: IEncounterService;

  @inject(TYPES.EncounterService)
  private readonly claimService: IClaimService;

  public async uploadEncountersCsv(csvPath: string) {

    try {
      const headers = ['id', 'start', 'stop', 'patient', 'organization', 'provider', 'payer', 'encounter_class', 'code', 'description', 'base_encounter_cost', 'total_claim_cost', 'payer_coverage', 'reason_code', 'reason_description'];
      const fileContent = fs.readFileSync(csvPath, { encoding: 'utf-8' })
      
      parse(fileContent, {
          delimiter: ',',
          columns: headers,
        }, async (error, results: IEncounterCsv[]) => {
          if (error) {
            console.error(error);
          }

          for (var result of results.slice(2,3)){
            const encounter: IEncounter = {
              resource_type: 'Encounter',
              resource_id: result.id,
              subject: result.patient,
              participant: result.provider,
              service_provider: result.organization,
              status: 'finished',
              class: result.encounter_class,
              service_type: result.description,
              reason_code: result.code,
              reason_description: result.reason_description,
              start: new Date(result.start.substring(0, 10)),
              end: new Date(result.stop.substring(0, 10))
            }
            // console.log(result);
            // console.log(encounter);
            const encounterData: IEncounter = await this.encounterService.create(encounter);

            // console.log(encounterData);

            // Raise new encounter event
            eventService.emit(eventName.newEncounter, encounterData?.resource_id, encounterData);
          }
        }
      );
    } catch (e: any) {
      logger.error('Ooops!');
      throw new GenericResponseError(e.message, e.code);
    }
  }

  public async uploadClaimsCsv(csvPath: string) {

    try {
      const headers = [
        'id', 'patient_id', 'provider_id', 'primary_patient_insurance_id', 'secondary_patient_insurance_id', 
        'department_id', 'patient_department_id', 'diagnosis_1', 'diagnosis_2', 'diagnosis_3', 'diagnosis_4', 
        'diagnosis_5', 'diagnosis_6', 'diagnosis_7', 'diagnosis_8', 'referring_provider_id', 'appointment_id', 
        'current_illness_data', 'service_date', 'supervising_provider_id', 'status_1', 'status_2', 'status_p', 
        'outstanding_1', 'outstanding_2', 'outstanding_p', 'last_billed_date_1', 'last_billed_date_2', 
        'last_billed_date_p', 'leath_care__claim_type_id_1', 'health_care_claim_type_id_2'
      ];
      const fileContent = fs.readFileSync(csvPath, { encoding: 'utf-8' })

      parse(fileContent, {
        delimiter: ',',
        columns: headers,
      }, async (error, records: IClaimCsv[]) => {
        if (error) {
          console.error(error);
        }

        for (var result of records.slice(1, 2)) {
          const claim: IClaim = {
            resource_type: 'Claim',
            resource_id: result.id,
            subject: result.patient_id,
            provider: result.provider_id,
            status: 'active',
            type: 'institutional',
            use: 'claim',
            billable_period_start: new Date(result.last_billed_date_1.substring(0, 10)),
            billable_period_end: new Date(result.last_billed_date_p.substring(0, 10)),

            
          }
          console.log(result);
          console.log(claim);
          const claimData: IClaim = await this.claimService.create(claim);

          console.log(claimData);

          // Raise new encounter event 
          eventService.emit(eventName.newClaim, claimData?.resource_id, claimData);

        }
      }
      );
    } catch (e: any) {
      logger.error('Ooops!');
      throw new GenericResponseError(e.message, e.code);
    }
  }

}