import { inject, injectable } from 'inversify';
import _ from 'lodash';
import TYPES from '../../config/types';
import { IAddress } from '../../models/address';
import { ICodeableConcept } from '../../models/codeableConcepts';
import { ICoding } from '../../models/codings';
import { ICommunication } from '../../models/communications';
import { IContactPoint } from '../../models/contactPoints';
import { IHumanName } from '../../models/humanNames';
import { IPatientContact } from '../../models/patientContacts';
import { IPatient } from '../../models/patients';
import { IPeriod } from '../../models/periods';
import { PatientRepository } from '../../repository';
import { InternalServerError } from '../../utils';

@injectable()
export class PatientService {
  @inject(TYPES.PatientRepository)
  private readonly patientRepo: PatientRepository;

  private static extractHumanName(data: any, type: string): IHumanName {
    const firstName = `${type}_first_name`;
    const lastName = `${type}_last_name`;
    const otherName = `${type}_other_name`;
    const nameSince = `${type}_name_since`;
    const namePrefix = `${type}_name_prefix`;
    const nameUse = `${type}_name_use`;
    const dob = `${type}_date_of_birth`;
    const DEFAULT_NAME_USE = 'official';

    const nameExtract = _.pick(data,
      [
        firstName,
        lastName,
        otherName,
        nameSince,
        namePrefix,
        nameUse,
        dob
      ]
    );

    const givenName = [nameExtract[firstName]];

    if (nameExtract[otherName]) {
      givenName.push(nameExtract[otherName]);
    }

    const fullName = nameExtract[firstName] + ' ' +
      nameExtract[lastName] + ' ' + nameExtract[otherName];

    return {
      use: nameExtract[nameUse] ?? DEFAULT_NAME_USE,
      text: fullName,
      family: nameExtract[lastName],
      given: givenName,
      prefix: [nameExtract[namePrefix]],
      period: {
        start: nameExtract[nameSince] ?
          new Date(nameExtract[nameSince]) :
          new Date(nameExtract[dob]),
      }
    };
  }

  private static extractAddress(data: any, type: string): IAddress {
    const country = `${type}_country`;
    const city = `${type}_city`;
    const state = `${type}_state`;
    const postalCode = `${type}_postal_code`;
    const addressType = `${type}_address_type`;
    const addressUse = `${type}_address_use`;
    const addressSince = `${type}_address_since`;

    const addressExtract = _.pick(data,
      [
        country, city, state,
        postalCode, addressType,
        addressUse, addressSince
      ]
    );

    let period: IPeriod | any;

    if (addressExtract[addressSince]) {
      period = {
        start: new Date(addressExtract[addressSince])
      };
    }

    return {
      use: addressExtract[addressUse],
      type: addressExtract[addressType],
      city: addressExtract[city],
      state: addressExtract[state],
      postal_code: addressExtract[postalCode],
      country: addressExtract[country],
      period
    };
  }

  private static extractCoding(): ICoding | any {
    const maritalStatus: ICoding = {
      system: 'http://terminology.hl7.org/CodeSystem/v3-MaritalStatus',
      version: '4.0.1',
      code: 'M',
      display: 'Married',
      user_selected: false,
    };

    const language: ICoding = {
      system: 'urn:ietf:bcp:47',
      version: '4.0.1',
      code: 'en',
      display: 'English',
      user_selected: false,
    };

    const relationship: ICoding = {
      system: 'http://hl7.org/fhir/relationship',
      version: '4.0.1',
      code: '1',
      display: 'Self',
      user_selected: false,
    };

    return {
      maritalStatus,
      language,
      relationship,
    };

  }

  private static extractCodeableConcept(data: any, type: string): ICodeableConcept {
    const coding = PatientService.extractCoding();
    return {
      coding: coding[type],
      text: coding[type].display,
    };
  }

  private static extractContactPoint(data: any, type: string): IContactPoint[] {
    const phone = data[`${type}_phone`];
    const email = data[`${type}_email`];

    return [
      {
        system: 'phone',
        use: 'mobile',
        rank: 1,
        value: phone
      },
      {
        system: 'email',
        use: 'home',
        rank: 0,
        value: email
      },
    ];
  }

  private static extractDateOfBirth(data: any): string {
    const newDate = new Date(data.patient_date_of_birth);
    const year = newDate.getFullYear();
    let month: string | number = newDate.getMonth() + 1;
    const day = newDate.getDate();

    month = month < 10 ? `0${month}` : month;

    return `${year}-${month}-${day}`;

  }

  // private getContact(data: any): IPatientContact {
  //
  // }

  public async registerPatient(data: any): Promise<IPatient> {
    try {
      const patientName = PatientService.extractHumanName(data, 'patient');
      const patientAddress = PatientService.extractAddress(data, 'patient');
      const patientContact: IPatientContact = {
        name: PatientService.extractHumanName(data, 'patient_ref'),
        address: PatientService.extractAddress(data, 'patient_ref'),
        relationship: PatientService.extractCodeableConcept(data, 'relationship'),
        gender: data.patient_ref_gender,
        telecom: PatientService.extractContactPoint(data, 'patient_ref'),
      }

      const patientCommunication: ICommunication = {
        language: PatientService.extractCodeableConcept(data, 'language'),
        preferred: true
      }

      const patient: IPatient = {
        active: true,
        resource_type: 'Patient',
        gender: data.patient_gender,
        birth_date: PatientService.extractDateOfBirth(data),
        name: patientName,
        address: patientAddress,
        contact: patientContact,
        communication: patientCommunication
      };

      console.log('Patient:', patient);

      return await this.patientRepo.registerPatient(patient);
    } catch (e) {
      throw new InternalServerError(e.message);
    }
  }
}
