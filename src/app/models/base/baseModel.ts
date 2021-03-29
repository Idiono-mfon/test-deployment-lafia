import { JSONSchema, Model, snakeCaseMappers } from 'objection';
import { PostgresConnection } from '../../config';
import { IBase } from './interfaces';
import { BaseValidation } from './validation';

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
export class BaseModel extends Model implements IBase {
  id!: IBase['id'];
  created_at!: IBase['created_at'];
  updated_at!: IBase['updated_at'];

  static get modelPaths(): string[] {
    return [__dirname];
  }

  static get columnNameMappers() {
    return snakeCaseMappers();
  }

  static get jsonSchema(): JSONSchema {
    return BaseValidation;
  }
}
