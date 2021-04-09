import { injectable } from 'inversify';
import { transaction } from 'objection';
import { IPatient, PatientModel } from '../../models/patients';
import {
  GenericResponseError,
  HttpStatusCode,
  InternalServerError
} from '../../utils';

@injectable()
export class PatientRepository {
  public async updatePatient(data: IPatient): Promise<IPatient> {
    try {
      return await transaction(PatientModel, async (PatientModel) => {
        return PatientModel.query().insertGraphAndFetch(data);
      });
    } catch (e) {
      console.error(e);
      throw new GenericResponseError(e.message, HttpStatusCode.BAD_REQUEST);
    }
  }

  public async findPatientById(id: string): Promise<IPatient> {
    try {
      return await transaction(PatientModel, async(PatientModel) => {
          return PatientModel.query()
            .where({ id })
            .withGraphFetched(
              '[' +
                'text, ' +
                'maritalStatus.[' +
                  'coding' +
                '],' +
                'managingOrganization,' +
                'identifier.[' +
                  'type,' +
                  'period,' +
                  'assigner,' +
                '],' +
                'name.[period],' +
                'telecom.[period],' +
                'address.[period],' +
                'photo,' +
                'contact.[' +
                  'name, ' +
                  'address.[' +
                    'period' +
                  ']' +
                '],' +
                'communication.[' +
                  'language.[' +
                    'coding' +
                  ']' +
                '],' +
                'generalPractitioner,' +
                'link,' +
              ']'
            )
            .skipUndefined()
            .first();
        });
    } catch (e) {
      throw new InternalServerError(e.message);
    }
  }

  public async createPatient(data: any): Promise<IPatient> {
    try {
      return await transaction(PatientModel, async (PatientModel) => {
        return PatientModel.query().insertGraphAndFetch(data);
      });
    } catch (e) {
      console.error(e);
      throw new GenericResponseError(e.message, HttpStatusCode.BAD_REQUEST);
    }
  }
}
