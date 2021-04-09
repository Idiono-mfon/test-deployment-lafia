import { inject, injectable } from 'inversify';
import _ from 'lodash';
import TYPES from '../../config/types';
import { AttachmentModel, IAttachment } from '../../models/attachments';
import { ICodeSystem, ICodeType } from '../../models/codeSystems';
import { ICoding } from '../../models/codings';
import { PatientsAttachmentModel } from '../../models/patientsAttachments';
import { IPeriod } from '../../models/periods';
import { IAddress } from '../../models/address';
import { IPatient } from '../../models/patients';
import { S3Service } from '../awsS3';
import { CodeSystemService } from '../codeSystems';
import { IHumanName } from '../../models/humanNames';
import { PatientRepository } from '../../repository';
import { IContactPoint } from '../../models/contactPoints';
import { ICommunication } from '../../models/communications';
import { IPatientContact } from '../../models/patientContacts';
import { ICodeableConcept } from '../../models/codeableConcepts';
import {
  codeType,
  error, forWho, GenericResponseError,
  InternalServerError, throwError
} from '../../utils';

const { badRequest } = error;

@injectable()
export class PatientService {
  @inject(TYPES.PatientRepository)
  private readonly patientRepo: PatientRepository;

  @inject(TYPES.CodeSystemService)
  private readonly codeSystemService: CodeSystemService;

  @inject(TYPES.S3Service)
  private readonly s3Service: S3Service;

  private static extractDateOfBirth(data: any): string {
    const patientDateOfBirth: any = data.patient_date_of_birth;
    try {
      if (!patientDateOfBirth) {
        throwError('Provide a valid value for dateOfBirth', badRequest);
      }

      const newDate = new Date(patientDateOfBirth);
      const year = newDate.getFullYear();
      let month: string | number = newDate.getMonth() + 1;
      const day = newDate.getDate();

      month = month < 10 ? `0${month}` : month;

      return `${year}-${month}-${day}`;
    } catch (e) {
      throw new GenericResponseError(e.message, e.code);
    }
  }

  private static extractName(data: any, forWho: string): IHumanName {
    try {
      const firstName = `${forWho}_first_name`;
      const lastName = `${forWho}_last_name`;
      const otherName = `${forWho}_other_name`;
      const nameSince = `${forWho}_name_since`;
      const namePrefix = `${forWho}_name_prefix`;
      const nameUse = `${forWho}_name_use`;
      const DEFAULT_NAME_USE = 'official';
      const dob = PatientService.extractDateOfBirth(data);

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
    } catch (e) {
      throw new GenericResponseError(e.message, e.code);
    }
  }

  private static extractAddress(data: any, forWho: string): IAddress {
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

  private async getCoding(code: string): Promise<ICoding> {
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
    } catch (e) {
      throw new GenericResponseError(e.message, e.code);
    }
  }

  private async extractCodeableConcept(data: any, forWho: string, codeType: string): Promise<ICodeableConcept> {
    try {
      const code = data[`${forWho}_${codeType}`];
      const coding = await this.getCoding(code);
      return {
        coding: [coding],
        text: coding.display,
      };
    } catch (e) {
      throw new GenericResponseError(e.message + codeType, e.code);
    }
  }

  private static extractContactPoint(data: any, forWho: string): IContactPoint[] {
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
    } catch (e) {
      throw new GenericResponseError(e.message, e.code);
    }
  }

  private async getContact(data: any, forWho: string, codeType: ICodeType): Promise<IPatientContact> {
    try {
      const relationship: ICodeableConcept = await this.extractCodeableConcept(data, forWho, codeType.relationship);
      const name: IHumanName = PatientService.extractName(data, forWho);
      const telecom: IContactPoint[] = PatientService.extractContactPoint(data, forWho);
      const address: IAddress = PatientService.extractAddress(data, forWho);
      const gender: string = data[`${forWho}_gender`];

      return {
        relationship,
        name,
        telecom,
        address,
        gender,
      };
    } catch (e) {
      throw new GenericResponseError(e.message, e.code);
    }
  }

  public async updatePatient(id: string, data: any): Promise<IPatient> {
    try {
      const dob = PatientService.extractDateOfBirth(data);
      const maritalStatus: ICodeableConcept = await this.extractCodeableConcept(data, forWho.patient, codeType.maritalStatus);
      const patientName = PatientService.extractName(data, forWho.patient);
      const patientAddress = PatientService.extractAddress(data, forWho.patient);
      const patientContact: IPatientContact = await this.getContact(data, forWho.patientContact, codeType);
      const patientCommunication: ICommunication = {
        language: await this.extractCodeableConcept(data, forWho.patient, codeType.language),
        preferred: true
      };
      const telecom: IContactPoint[] = PatientService.extractContactPoint(data, forWho.patient);

      let patient: IPatient = {
        active: true,
        resourceType: 'Patient',
        gender: data.patient_gender,
        birthDate: dob,
        maritalStatus,
        name: patientName,
        address: patientAddress,
        telecom,
        contact: patientContact,
        communication: patientCommunication
      };


      const patientOldData = await this.getPatientObjectIdsById(id);

      for (let prop in patientOldData) {
        if (!patientOldData[prop] || patientOldData[prop].length === 0) {
          delete patientOldData[prop];
        }
      }

      patient = _.merge(patient, patientOldData);

      return await this.patientRepo.updatePatient(patient);
    } catch (e) {
      throw new InternalServerError(e.message);
    }
  }

  public async findPatientById(id: string): Promise<IPatient> {
    return this.patientRepo.findPatientById(id);
  }

  public async createPatient(data: any): Promise<IPatient> {
    const {
      gender,
      first_name,
      last_name,
      email,
      password
    } = data;

    // Todo: Create the user in our platform sdk

    const patientData: IPatient = {
      active: true,
      gender,
      name: {
        use: 'official',
        text: `${first_name} ${last_name}`,
        family: last_name,
        given: [first_name]
      },
      telecom: [
        {
          system: 'email',
          use: 'home',
          rank: 0,
          value: email
        }
      ],
    };

    return await this.patientRepo.createPatient(patientData);
  }

  private async getPatientObjectIdsById(id: string): Promise<any> {
    return this.patientRepo.getIds(id);
  }

  public async uploadAttachment(patientId: string, file: Express.Multer.File): Promise<IAttachment> {
    try {
      const patient: any = await this.findPatientById(patientId);

      if (!patient) {
        throwError('No User Record. Confirm the user id', error.notFound);
      }

      const fileLink = await this.s3Service.uploadFile(file);

      const {
        size,
        originalname,
        mimetype,
      } = file;

      const attachmentData: IAttachment = {
        contentType: mimetype,
        size,
        title: originalname,
        url: fileLink,
        creation: new Date(),
      };


      const attachment: IAttachment = await AttachmentModel.query()
        .insertAndFetch(attachmentData);

      await PatientsAttachmentModel.query()
        .insert({
          patientId: patient?.id,
          attachmentId: attachment?.id
        });

      return attachment;
    } catch(e) {
      throw new InternalServerError(e.message);
    }
  }
}
