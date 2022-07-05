import { JSONSchema } from 'objection';
import { Schema, Table } from '../../../database';
import { BaseModel } from '../base';
import { ICareTeam } from './interfaces';
import { CareTeamValidation } from './validation';

export class CareTeamModel extends BaseModel implements ICareTeam {
  id!: ICareTeam['id'];
  resource_type!: ICareTeam['resource_type'];
  resource_id!: ICareTeam['resource_id'];
  subject!: ICareTeam['subject'];
  name!: ICareTeam['name'];
  encounter!: ICareTeam['encounter'];

  static get tableName() {
    return `${Schema.lafiaService}.${Table.care_teams}`;
  }

  static get jsonSchema(): JSONSchema {
    return CareTeamValidation;
  }
}
