import { injectable } from 'inversify';
import { transaction } from 'objection';
import { IPatient, PatientModel } from '../../models';
import {
  GenericResponseError,
  HttpStatusCode,
  InternalServerError, logger
} from '../../utils';

@injectable()
export class PatientRepository {
  public async updatePatient(data: IPatient): Promise<IPatient> {
    logger.info('Running PatientRepository::updatePatient');
    try {
      return await transaction(PatientModel, async (PatientModel) => {
        return PatientModel.query().upsertGraphAndFetch(data, { relate: true, unrelate: true });
      });
    } catch (e: any) {
      throw new GenericResponseError(e.message, HttpStatusCode.BAD_REQUEST);
    }
  }

  public async findPatientById(id: string): Promise<IPatient> {
    logger.info('Running PatientRepository::findPatientById');
    try {
      return await transaction(PatientModel, async(PatientModel) => {
          return PatientModel.query()
            .where({ id })
            .withGraphFetched(
              `[
                text, 
                maritalStatus.[
                  coding
                ],
                managingOrganization,
                identifier.[
                  type,
                  period,
                  assigner,
                ],
                name.[period],
                telecom.[period],
                address.[period],
                photo,
                contact.[
                  name, 
                  address.[
                    period
                  ]
                ],
                communication.[
                  language.[
                    coding
                  ]
                ],
                generalPractitioner,
                link,
              ]`
            )
            .skipUndefined()
            .first();
        });
    } catch (e: any) {
      throw new InternalServerError(e.message);
    }
  }

  public async getIds(id: string): Promise<any> {
    logger.info('Running PatientRepository::getIds');
    try {
      return await transaction(PatientModel, async(PatientModel) => {
          return PatientModel.query()
            .modify('selectId')
            .where({ id })
            .withGraphFetched(
              `[
                text(selectId), 
                maritalStatus(selectId).[
                  coding(selectId)
                ],
                managingOrganization(selectId),
                identifier(selectId).[
                  type(selectId),
                  period(selectId),
                  assigner(selectId),
                ],
                name(selectId).[period(selectId)],
                telecom(selectId).[period(selectId)],
                address(selectId).[period(selectId)],
                photo(selectId),
                contact(selectId).[
                  name(selectId), 
                  address(selectId).[
                    period(selectId)
                  ]
                ],
                communication(selectId).[
                  language(selectId).[
                    coding(selectId)
                  ]
                ],
                generalPractitioner(selectId),
                link(selectId),
              ]`
            )
            .skipUndefined()
            .first();
        });
    } catch (e: any) {
      throw new InternalServerError(e.message);
    }
  }

  public async createPatient(data: any): Promise<IPatient> {
    logger.info('Running PatientRepository::getIds');
    try {
      return await transaction(PatientModel, async (PatientModel) => {
        return PatientModel.query().insertGraphAndFetch(data);
      });
    } catch (e: any) {
      throw new GenericResponseError(e.message, HttpStatusCode.BAD_REQUEST);
    }
  }
}
