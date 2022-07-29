import { JSONSchema } from 'objection';
import { Schema, Table } from '../../../database';
import { BaseModel } from '../base';
import { IClaim } from './interfaces';
import { ClaimValidation } from './validation';

export class ClaimModel extends BaseModel implements IClaim {
  id!: IClaim['id'];
  resource_type!: IClaim['resource_type'];
  resource_id!: IClaim['resource_id'];
  subject!: IClaim['subject'];
  status!: IClaim['status'];
  provider!: IClaim['provider'];

  static get tableName() {
    return `${Schema.lafiaService}.${Table.claims}`;
  }

  static get jsonSchema(): JSONSchema {
    return ClaimValidation;
  }
}
