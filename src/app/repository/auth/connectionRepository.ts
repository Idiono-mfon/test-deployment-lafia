import { injectable } from 'inversify';
import { transaction } from 'objection';
import { ConnectionModel, IConnection, IFindConnection } from '../../models';
import { GenericResponseError, HttpStatusCode, InternalServerError } from '../../utils';

@injectable()
export class ConnectionRepository {
  public async getConnectionByType(connectionType: object): Promise<IConnection[]> {
    try {
      let connections = ConnectionModel.query();

      if (connectionType) {
        connections = connections
          .where( connectionType )
          .skipUndefined();
      }

      return await connections;
    } catch (e: any) {
      throw new InternalServerError(e.message);
    }
  }

  public async getConnectionByFields(fields: IFindConnection): Promise<IConnection> {
    try {
      return await ConnectionModel.query().where(fields).skipUndefined().first();
    } catch (e: any) {
      throw new InternalServerError(e.message);
    }
  }

  public async addConnection(data: IConnection): Promise<IConnection> {
    try {
      return await ConnectionModel.query().insertAndFetch(data);
    }
    catch (e) {
      throw new InternalServerError(e.message);
    }
  }

  public async getConnectionByPatientId(patient_id: string): Promise<IConnection> {
    try {
      return await ConnectionModel.query()
        .where({ patient_id })
        .skipUndefined()
        .first();
    } catch (e: any) {
      throw new InternalServerError(e.message);
    }
  }

  public async updateConnection(data: IFindConnection): Promise<IConnection> {
    try {
      return await transaction(ConnectionModel, async (ConnectionModel) => {
        return ConnectionModel.query().upsertGraphAndFetch(data, { relate: true, unrelate: true });
      });
    } catch (e: any) {
      console.error(e);
      throw new GenericResponseError(e.message, HttpStatusCode.BAD_REQUEST);
    }
  }

  public async deleteConnection(id: string) {
    return ConnectionModel.query().deleteById(id);
  }
}
