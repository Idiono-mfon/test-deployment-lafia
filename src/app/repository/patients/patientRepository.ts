import { injectable } from 'inversify';
import { transaction } from 'objection';
import { IPatient, PatientModel } from '../../models/patients';
import { InternalServerError } from '../../utils';

@injectable()
export class PatientRepository {
  public async registerPatient(data: IPatient): Promise<IPatient> {
    try {
      return await transaction(PatientModel, async (PatientModel) => {
        return PatientModel.query().insertGraphAndFetch(data);
      });
    } catch (e) {
      console.error(e);
      throw new InternalServerError(e.message);
    }
  }
}
