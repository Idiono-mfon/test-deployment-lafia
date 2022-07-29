import { JSONSchema } from 'objection';
import { Schema, Table } from '../../../database';
import { BaseModel } from '../base';
import { IEncounter } from './interfaces';
import { EncounterValidation } from './validation';

export class EncounterModel extends BaseModel implements IEncounter {
  id!: IEncounter['id'];
  resource_type!: IEncounter['resource_type'];
  resource_id!: IEncounter['resource_id'];
  subject!: IEncounter['subject'];
  participant!: IEncounter['participant'];
  service_provider!: IEncounter['service_provider'];

  static get tableName() {
    return `${Schema.lafiaService}.${Table.encounters}`;
  }

  static get jsonSchema(): JSONSchema {
    return EncounterValidation;
  }
}
