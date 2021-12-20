import { injectable } from 'inversify';
import { ConnectionModel } from '../../models';
import { BaseRepository, DbAccess } from '../base';

@injectable()
export class ConnectionRepository extends BaseRepository implements DbAccess {

  constructor() {
    super(ConnectionModel);
  }

}
