import { injectable } from 'inversify';
import { transaction } from 'objection';
import { ConnectionModel, IConnection, IFindConnection } from '../../models';
import { GenericResponseError, HttpStatusCode, InternalServerError, logger } from '../../utils';

@injectable()
export class ConnectionRepository {
  public async getConnectionByType(connectionType: object): Promise<IConnection[]> {
    logger.info('Running ConnectionRepository.getConnectionByType');
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
    logger.info('Running ConnectionRepository.getConnectionByFields');
    try {
      return await ConnectionModel.query().where(fields).skipUndefined().first();
    } catch (e: any) {
      throw new InternalServerError(e.message);
    }
  }

  public async addConnection(data: IConnection): Promise<IConnection> {
    logger.info('Running ConnectionRepository.addConnection');
    try {
      return await ConnectionModel.query().insertAndFetch(data);
    }
    catch (e: any) {
      throw new InternalServerError(e.message);
    }
  }

  public async getConnectionByPatientId(patient_id: string): Promise<IConnection[]> {
    logger.info('Running ConnectionRepository.getConnectionByPatientId');
    try {
      return await ConnectionModel.query()
        .select(['id', 'patient_id', 'connection_name', 'access_token'])
        .where({ patient_id })
        .skipUndefined();
    } catch (e: any) {
      throw new InternalServerError(e.message);
    }
  }

  public async updateConnection(data: IFindConnection): Promise<IConnection> {
    logger.info('Running ConnectionRepository.updateConnection');
    try {
      return await transaction(ConnectionModel, async (ConnectionModel) => {
        return ConnectionModel.query().upsertGraphAndFetch(data, { relate: true, unrelate: true });
      });
    } catch (e: any) {
      throw new GenericResponseError(e.message, HttpStatusCode.BAD_REQUEST);
    }
  }

  public async deleteConnection(id: string) {
    logger.info('Running ConnectionRepository.deleteConnection');
    return ConnectionModel.query().deleteById(id);
  }
}
