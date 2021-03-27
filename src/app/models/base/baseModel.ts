import { Model, snakeCaseMappers } from 'objection';
import { PostgresConnection } from '../../config';

/*
* @description: Initialize Knex instance -
* giving objection access to db connection
*/
Model.knex(PostgresConnection.getDb());


/*
* @class: BaseModel
*
* @description: Set general configuration for
* all other models
*/
export class BaseModel extends Model {
  static get modelPaths(): string[] {
    return [__dirname];
  }

  static get columnNameMappers() {
    return snakeCaseMappers();
  }
}
