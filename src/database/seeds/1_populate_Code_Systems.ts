import * as Knex from "knex";
import { Schema } from '../schema';
import { Table } from '../table';
import {
  durations,
  languages,
  maritalStatus,
  relationships
} from './codeSystemData';
import { qualifications } from './codeSystemData/qualifications';

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex(`${Schema.lafiaService}.${Table.code_systems}`).del();

  // Inserts seed entries
  await knex(`${Schema.lafiaService}.${Table.code_systems}`).insert([
    ...relationships,
    ...maritalStatus,
    ...languages,
    ...qualifications,
    ...durations,
  ]);
}
