import { injectable } from 'inversify';
import { CodeSystemModel } from '../../models';
import { BaseRepository, DbAccess } from '../base';

@injectable()
export class CodeSystemRepository extends BaseRepository implements DbAccess {

  constructor() {
    super(CodeSystemModel);
  }

}
