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

  public async findPatientById(id: string): Promise<IPatient> {
    try {
      return await transaction(PatientModel, async(PatientModel) => {
          return PatientModel.query()
            .modify('defaultSelects')
            .where({ id })
            .withGraphFetched(
              '[' +
              'text(defaultSelects), ' +
              'marital_status(defaultSelects).[' +
                'coding(defaultSelects)' +
              '],' +
              'managing_organization(defaultSelects),' +
              'identifier(defaultSelects).[' +
                'type(defaultSelects),' +
                'period(defaultSelects),' +
                'assigner(defaultSelects),' +
              '],' +
              'name(defaultSelects).[' +
                'period(defaultSelects)' +
              '],' +
              'telecom(defaultSelects).[' +
                'period(defaultSelects)' +
              '],' +
              'address(defaultSelects).[' +
                'period(defaultSelects)' +
              '],' +
              'photo(defaultSelects),' +
              'contact(defaultSelects).[' +
                'name(defaultSelects), ' +
                'address(defaultSelects).[' +
                  'period(defaultSelects)' +
                ']' +
              '],' +
              'communication(defaultSelects).[' +
                'language(defaultSelects).[' +
                  'coding(defaultSelects)' +
                ']' +
              '],' +
              'general_practitioner(defaultSelects),' +
              'link(defaultSelects),' +
              ']'
            )
            .skipUndefined()
            .first();
        });
    } catch (e) {
      throw new InternalServerError(e.message);
    }
  }
}
