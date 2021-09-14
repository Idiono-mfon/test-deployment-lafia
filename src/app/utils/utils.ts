import { inject, injectable } from 'inversify';
import _ from 'lodash';
import TYPES from '../config/types';
import {
  IAddress,
  ICodeableConcept,
  ICodeSystem, ICodeType,
  ICoding, IContactPoint,
  IHumanName, INarrative,
  IPeriod, IQualification,
  IReference,
} from '../models';
import { CodeSystemService } from '../services';
import {
  error,
  throwError,
  GenericResponseError
} from './errors';

const { badRequest } = error;

function resourceNarrative(name: string, managingOrg: string, mrValue: string): INarrative {
  const summaryText = `
      <div xmlns=\\"http://www.w3.org/1999/xhtml\\">

        \\n\\t\\t\\t

          <p>Patient ${name} @ ${managingOrg}. 

              MR = ${mrValue}</p>

      </div> 
    `;

  return {
    status: 'generated',
    div: summaryText,
  };
}

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

@injectable()
class UtilityService {
  @inject(TYPES.CodeSystemService)
  private readonly codeSystemService: CodeSystemService;

  public extractDateOfBirth(data: any, forWho: string): string {
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

  public checkForRequiredFields(data: any) {
    try {
      const { email } = data;

      if (!email) {
        throwError('Email is required!', badRequest);
      }
    } catch (e: any) {
      throw new GenericResponseError(e.message, e.code);
    }
  }

  public removeFalsyProps(data: any): void {
    for (let prop in data) {
      if (!data[prop] || data[prop].length === 0) {
        delete data[prop];
      }

      if (prop === 'name' || prop === 'telecom') {
        for (let _props of data[prop]) {
          for (let _prop in _props) {
            if (!_props[_prop] ||
              _props[_prop].length === 0) {
              delete _props[_prop];
            }
          }
        }
      }
    }
  }

  public mergeDataForUpdate(source: any, mergeWith: any): void {
    if (source) {
      source.id = mergeWith.id;
    }
    if (mergeWith?.text) {
      if (_.isEmpty(source?.text)) {
        source.text = mergeWith?.text;
      } else {
        source.text.id = mergeWith?.text?.id;
      }
    }
    if (mergeWith.name) {
      source.name = [source.name];
      for (let i = 0; i < mergeWith?.name.length; i++) {
        if (mergeWith?.name[i]) {
          if (_.isEmpty(source?.name[i])) {
            source.name[i] = mergeWith?.name[i];
          } else {
            source.name[i].id = mergeWith?.name[i]?.id;
          }
        }
        if (mergeWith?.name[i]?.period) {
          if (_.isEmpty(source?.name[i]?.period)) {
            source.name[i].period = mergeWith?.name[i]?.period;
          } else {
            source.name[i].period.id = mergeWith?.name[i]?.period?.id;
          }
        }
      }
    }
    if (mergeWith.communication) {
      source.communication = [source.communication];
      for (let i = 0; i < mergeWith?.communication.length; i++) {
        if (mergeWith?.communication[i]) {
          if (_.isEmpty(source?.communication[i])) {
            source.communication[i] = mergeWith?.communication[i];
          } else {
            source.communication[i].id = mergeWith?.communication[i]?.id;
          }
        }
        if (mergeWith?.communication[i]?.language) {
          if (_.isEmpty(source?.communication[i]?.language)) {
            source.communication[i].language = mergeWith?.communication[i]?.language;
          } else {
            source.communication[i].language.id = mergeWith.communication[i].language.id;
          }
        }
        if (mergeWith.communication[i]?.language?.coding) {
          for (let i = 0; i < mergeWith.communication[i]?.language?.coding.length; i++) {
            if (mergeWith?.communication[i]?.language?.coding[i]) {
              if (_.isEmpty(source?.communication[i]?.language?.coding[i])) {
                source.communication[i].language.coding[i] = mergeWith?.communication[i]?.language?.coding[i];
              } else {
                source.communication[i].language.coding[i].id = mergeWith?.communication[i]?.language?.coding[i]?.id;
              }
            }
          }
        }
      }
    }
    if (mergeWith.qualification) {
      source.qualification = [source.qualification];
      for (let i = 0; i < mergeWith?.qualification.length; i++) {
        if (mergeWith?.qualification[i]) {
          if (_.isEmpty(source?.qualification[i])) {
            source.qualification[i] = mergeWith?.qualification[i];
          } else {
            source.qualification[i].id = mergeWith?.qualification[i]?.id;
          }
        }
        if (mergeWith?.qualification[i]?.issuer) {
          if (_.isEmpty(source?.qualification[i]?.issuer)) {
            source.qualification[i].issuer = mergeWith?.qualification[i].issuer;
          } else {
            source.qualification[i].issuer.id = mergeWith?.qualification[i]?.issuer?.id;
          }
        }
        if (mergeWith?.qualification[i]?.period) {
          if (_.isEmpty(source?.qualification[i]?.period)) {
            source.qualification[i].period = mergeWith?.qualification[i].period;
          } else {
            source.qualification[i].period.id = mergeWith?.qualification[i]?.period?.id;
          }
        }
        if (mergeWith?.qualification[i]?.code) {
          if (_.isEmpty(source?.qualification[i]?.code)) {
            source.qualification[i].code = mergeWith?.qualification[i]?.code;
          } else {
            source.qualification[i].code.id = mergeWith.qualification[i].code.id;
          }
        }
        if (mergeWith.qualification[i]?.code?.coding) {
          for (let i = 0; i < mergeWith.qualification[i]?.code?.coding.length; i++) {
            if (mergeWith?.qualification[i]?.code?.coding[i]) {
              if (_.isEmpty(source?.qualification[i]?.code?.coding[i])) {
                source.qualification[i].code.coding[i] = mergeWith?.qualification[i]?.code?.coding[i];
              } else {
                source.qualification[i].code.coding[i].id = mergeWith?.qualification[i]?.code?.coding[i]?.id;
              }
            }
          }
        }
      }
    }
    if (mergeWith?.maritalStatus) {
      if (_.isEmpty(source?.maritalStatus)) {
        source.maritalStatus = mergeWith?.maritalStatus;
      } else {
        source.maritalStatus.id = mergeWith.maritalStatus.id;
        if (mergeWith.maritalStatus?.coding) {
          for (let i = 0; i < mergeWith.maritalStatus?.coding.length; i++) {
            if (mergeWith?.maritalStatus?.coding[i]) {
              if (_.isEmpty(source?.maritalStatus?.coding[i])) {
                source.maritalStatus.coding[i] = mergeWith?.maritalStatus?.coding[i];
              } else {
                source.maritalStatus.coding[i].id = mergeWith?.maritalStatus?.coding[i]?.id;
              }
            }
          }
        }
      }
    }
    if (mergeWith.address) {
      source.address = [source.address];
      for (let i = 0; i < mergeWith?.address.length; i++) {
        if (mergeWith?.address[i]) {
          if (_.isEmpty(source?.address[i])) {
            source.address[i] = mergeWith?.address[i];
          } else {
            source.address[i].id = mergeWith?.address[i]?.id;
          }
        }
        if (mergeWith?.address[i]?.period) {
          if (_.isEmpty(source?.address[i]?.period)) {
            source.address[i].period = mergeWith?.address[i]?.period;
          } else {
            source.address[i].period.id = mergeWith?.address[i]?.period.id;
          }
        }
      }
    }
    if (mergeWith.telecom) {
      for (let i = 0; i < mergeWith?.telecom.length; i++) {
        if (mergeWith?.telecom[i]) {
          if (_.isEmpty(source?.telecom[i])) {
            source.telecom[i] = mergeWith?.telecom[i];
          } else {
            source.telecom[i].id = mergeWith?.telecom[i]?.id;
          }
        }
      }
    }

    // todo: implement mergeWith.contact
  }

  public extractContactPoint(data: any, forWho: string): IContactPoint[] {
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
    return {
      type: resourceType,
      display: refName,
    };
  }

  public async getQualification(data: any, forWho: string, codeType: string): Promise<IQualification> {
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
  codeType,
  UtilityService,
};
