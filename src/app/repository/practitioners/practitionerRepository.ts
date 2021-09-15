import { injectable } from 'inversify';
import { transaction } from 'objection';
import { IPractitioner, PractitionerModel } from '../../models';
import {
  GenericResponseError,
  HttpStatusCode,
  InternalServerError
} from '../../utils';

@injectable()
export class PractitionerRepository {
  public async updatePractitioner(data: IPractitioner): Promise<IPractitioner> {
    try {
      return await transaction(PractitionerModel, async (PractitionerModel) => {
        return PractitionerModel.query().upsertGraphAndFetch(data);
      });
    } catch (e: any) {
      console.error(e);
      throw new GenericResponseError(e.message, HttpStatusCode.BAD_REQUEST);
    }
  }

  public async findPractitionerById(id: string): Promise<IPractitioner> {
    try {
      return await transaction(PractitionerModel, async(PractitionerModel) => {
        return PractitionerModel.query()
          .where({ id })
          .withGraphFetched(
            `[
              text, 
              identifier.[
                type,
                period,
                assigner,
              ],
              name.[period],
              telecom.[period],
              address.[period],
              photo,
              qualification.[
                code.[
                  coding
                ],
                issuer,
                period,
                identifier.[
                  type,
                  period,
                  assigner,
                ],
              ]
              communication.[
                language.[
                  coding
                ]
              ],
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
    try {
      return await transaction(PractitionerModel, async(PractitionerModel) => {
        return PractitionerModel.query()
          .modify('selectId')
          .where({ id })
          .withGraphFetched(
            `[
              text(selectId), 
              identifier(selectId).[
                type(selectId),
                period(selectId),
                assigner(selectId),
              ],
              name(selectId).[
                period(selectId)
              ],
              telecom(selectId).[
                period(selectId)
              ],
              address(selectId).[
                period(selectId)
              ],
              photo(selectId),
              qualification(selectId).[
                code(selectId).[
                  coding(selectId)
                ],
                issuer(selectId),
                period(selectId),
                identifier(selectId).[
                  type(selectId),
                  period(selectId),
                  assigner(selectId),
                ],
              ]
              communication(selectId).[
                language(selectId).[
                  coding(selectId)
                ]
              ],
            ]`
          )
          .skipUndefined()
          .first();
      });
    } catch (e: any) {
      throw new InternalServerError(e.message);
    }
  }

  public async createPractitioner(data: any): Promise<IPractitioner> {
    try {
      return await transaction(PractitionerModel, async (PractitionerModel) => {
        return PractitionerModel.query().upsertGraphAndFetch(data)
          .first();
      });
    } catch (e: any) {
      console.error(e);
      throw new GenericResponseError(e.message, HttpStatusCode.BAD_REQUEST);
    }
  }

  public async attachBroadcastVideos(practitionerID: string, broadcastVideoId: string): Promise<any> {
    return PractitionerModel.relatedQuery('broadcastVideos').for(practitionerID).relate(broadcastVideoId);
  }
}
