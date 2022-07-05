import { inject, injectable } from 'inversify';
import _ from 'lodash';
import TYPES from '../config/types';
import {
  IAddress,
  ICodeableConcept,
  IHumanName, IPeriod,
  ICodeSystem, ICodeType,
  ICoding, IContactPoint,
  IQualification, IReference,
} from '../models';
import { ICodeSystemService } from '../services';
import {
  error,
  throwError,
  GenericResponseError
} from './errors';
import { IUtilityService } from './interfaces';
import { logger } from './loggerUtil';

const { badRequest } = error;

interface ForWho {
  patient: string;
  patientContact: string;
  practitioner: string;

}

const forWho: ForWho = {
  patient: 'patient',
  patientContact: 'patient_ref',
  practitioner: 'practitioner',
  
};
const codeType: ICodeType = {
  language: 'language',
  relationship: 'relationship',
  qualification: 'qualification',
  maritalStatus: 'marital_status',
};

const resourceTypes = {
  patient: 'patient',
  practitioner: 'practitioner',
  encounter: 'encounter',
};

@injectable()
class UtilityService implements IUtilityService {
  @inject(TYPES.CodeSystemService)
  private readonly codeSystemService: ICodeSystemService;

  public extractDateOfBirth(data: any, forWho: string): string {
    logger.info('Running UtilityService.extractDateOfBirth');

    const dateOfBirth: any = data[`${forWho}_date_of_birth`];
    try {
      if (!dateOfBirth &&
        (forWho === 'patient' ||
          forWho === 'practitioner')
      ) {
        throwError('Provide a valid value for dateOfBirth', badRequest);
      }

      const newDate = new Date(dateOfBirth);
      const year = newDate.getFullYear();
      let month: string | number = newDate.getMonth() + 1;
      const day = newDate.getDate();

      month = month < 10 ? `0${month}` : month;

      return `${year}-${month}-${day}`;
    } catch (e: any) {
      throw new GenericResponseError(e.message, e.code);
    }
  }

  public extractName(data: any, forWho: string): IHumanName {
    logger.info('Running UtilityService.extractName');
    try {
      const firstName = `${forWho}_first_name`;
      const lastName = `${forWho}_last_name`;
      const otherName = `${forWho}_other_name`;
      const nameSince = `${forWho}_name_since`;
      const namePrefix = `${forWho}_name_prefix`;
      const nameUse = `${forWho}_name_use`;
      const DEFAULT_NAME_USE = 'official';
      const dob = this.extractDateOfBirth(data, forWho);

      if (!firstName || !lastName) {
        throwError('first_name and last_name fields are required', badRequest);
      }

      if (!dob) {
        throwError('date_of_birth is required', badRequest);
      }

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
    } catch (e: any) {
      throw new GenericResponseError(e.message, e.code);
    }
  }

  public extractAddress(data: any, forWho: string): IAddress {
    logger.info('Running UtilityService.extractAddress');

    const country = `${forWho}_country`;
    const city = `${forWho}_city`;
    const state = `${forWho}_state`;
    const postalCode = `${forWho}_postal_code`;
    const addressType = `${forWho}_address_type`;
    const addressUse = `${forWho}_address_use`;
    const addressSince = `${forWho}_address_since`;
    const address = `${forWho}_address`;

    const addressExtract = _.pick(data,
      [
        country, city, state, address,
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
      postalCode: addressExtract[postalCode],
      country: addressExtract[country],
      text: addressExtract[address],
      period
    };
  }

  public async getCoding(code: string): Promise<ICoding> {
    logger.info('Running UtilityService.getCoding');

    try {
      const codeSystem: ICodeSystem = await this.codeSystemService.getCodeSystemByCode(code);

      if (!codeSystem) {
        throwError('Provide the correct code for ', badRequest);
      }

      const { code: systemCode, system, display } = codeSystem;

      return {
        code: systemCode,
        system,
        display
      };
    } catch (e: any) {
      throw new GenericResponseError(e.message, e.code);
    }
  }

  public async extractCodeableConcept(data: any, forWho: string, codeType: string): Promise<ICodeableConcept> {
    logger.info('Running UtilityService.extractCodeableConcept');

    try {
      const code = data[`${forWho}_${codeType}`];
      const coding = await this.getCoding(code);
      return {
        coding: [coding],
        text: coding.display,
      };
    } catch (e: any) {
      throw new GenericResponseError(e.message + codeType, e.code);
    }
  }

  public checkForRequiredFields(data: any): void {
    logger.info('Running UtilityService.checkForRequiredFields');

    try {
      const email = data?.email;

      if (!email) {
        throwError('Email is required!', badRequest);
      }
    } catch (e: any) {
      throw new GenericResponseError(e.message, e.code);
    }
  }

  public extractContactPoint(data: any, forWho: string): IContactPoint[] {
    logger.info('Running UtilityService.extractContactPoint');

    try {
      const phone = data[`${forWho}_phone`];
      const email = data[`${forWho}_email`];
      const use = data[`${forWho}_use`];

      if (!phone) {
        throwError('Phone fields are required', badRequest);
      }

      if (!email) {
        throwError('Email fields are required', badRequest);
      }

      return [
        {
          system: 'phone',
          use: use ?? 'mobile',
          rank: 1,
          value: phone
        },
        {
          system: 'email',
          use: use ?? 'home',
          rank: 0,
          value: email
        },
      ];
    } catch (e: any) {
      throw new GenericResponseError(e.message, e.code);
    }
  }

  public async getContact(data: any, forWho: string, codeType: ICodeType): Promise<any> {
    logger.info('Running UtilityService.getContact');

    try {
      const relationship: ICodeableConcept = await this.extractCodeableConcept(data, forWho, codeType.relationship);
      const name: IHumanName = this.extractName(data, forWho);
      const telecom: IContactPoint[] = this.extractContactPoint(data, forWho);
      const address: IAddress = this.extractAddress(data, forWho);
      const gender: string = data[`${forWho}_gender`];

      return {
        relationship,
        name,
        telecom,
        address,
        gender,
      };
    } catch (e: any) {
      throw new GenericResponseError(e.message, e.code);
    }
  }

  public getReference(resourceType: string, refName: string): IReference {
    logger.info('Running UtilityService.getReference');

    return {
      type: resourceType,
      display: refName,
    };
  }

  public async getQualification(data: any, forWho: string, codeType: string): Promise<IQualification> {
    logger.info('Running UtilityService.getQualification');

    try {
      const code: ICodeableConcept = await this.extractCodeableConcept(data, forWho, codeType);
      const date = data[`${forWho}_qualification_issued_date`];
      const issueDate = new Date(date);
      const issuer: IReference = this.getReference(_.capitalize(forWho), data[`${forWho}_qualification_issuer`]);
      const period: IPeriod = {
        start: issueDate
      };

      return {
        code,
        issuer,
        period
      };
    } catch (e: any) {
      throw new GenericResponseError(e.message, e.code);
    }
  }
}

export {
  forWho,
  ForWho,
  resourceTypes,
  codeType,
  UtilityService,
};
