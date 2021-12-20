import { injectable } from 'inversify';
import { ComponentModel, } from '../../models';
import { BaseRepository, DbAccess } from '../base';

@injectable()
export class ComponentRepository extends BaseRepository implements DbAccess {

  constructor() {
    super(ComponentModel);
  }

}
