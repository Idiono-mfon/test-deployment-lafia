import { JSONSchema, Model, snakeCaseMappers } from 'objection';
import visibilityPlugin from 'objection-visibility';
import { v4 as uuid } from 'uuid';
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
export class BaseModel extends visibilityPlugin(Model) implements IBase {
  id!: IBase['id'];
  created_at!: IBase['created_at'];
  updated_at!: IBase['updated_at'];

  // Set timestamps before creating new data in the db
  $beforeInsert() {
    this.id = uuid();
    this.created_at = new Date();
    this.updated_at = new Date();
  }

  // Update the updated_at timestamp for the affected rows
  $beforeUpdate() {
    this.updated_at = new Date();
  }

  // Set the default path for all the models
  static get modelPaths(): string[] {
    return [__dirname];
  }

  // Convert column properties from snake_case to camelCase
  static get columnNameMappers() {
    return snakeCaseMappers();
  }

  static get jsonSchema(): JSONSchema {
    return BaseValidation;
  }
}
