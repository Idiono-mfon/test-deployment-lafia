import { injectable } from 'inversify';
import { IConnection } from '../../../app/models';
import { DbAccess } from '../../../app/repository';
import { TestBaseRepository } from './baseRepository';

const connections: IConnection[] = [
  {
    patient_id: '11',
    access_token: '',
    refresh_token: '',
    connection_name: 'lafia',
    accessToken: '',
    refreshToken: '',
    connectionName: 'lafia',
  }
];

@injectable()
export class TestConnectionRepository extends TestBaseRepository implements DbAccess {
  constructor() {
    super(connections);
  }
}
