import * as Knex from "knex";
import { Schema } from '../schema';
import { Table } from '../table';

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex(`${Schema.lafiaService}.${Table.code_systems}`).del();

  // Inserts seed entries
  await knex(`${Schema.lafiaService}.${Table.code_systems}`).insert([
    {
      system: 'http://terminology.hl7.org/CodeSystem/v2-0002',
      type: 'marital_status',
      code: 'A',
      display: 'Separated',
    },
    {
      system: 'http://terminology.hl7.org/CodeSystem/v2-0002',
      type: 'marital_status',
      code: 'D',
      display: 'Divorced',
    },
    {
      system: 'http://terminology.hl7.org/CodeSystem/v2-0002',
      type: 'marital_status',
      code: 'M',
      display: 'Married',
    },
    {
      system: 'http://terminology.hl7.org/CodeSystem/v2-0002',
      type: 'marital_status',
      code: 'S',
      display: 'Single',
    },
    {
      system: 'http://terminology.hl7.org/CodeSystem/v2-0002',
      type: 'marital_status',
      code: 'W',
      display: 'Widowed',
    },
    {
      system: 'http://terminology.hl7.org/CodeSystem/v2-0002',
      type: 'marital_status',
      code: 'C',
      display: 'Common law',
    },
    {
      system: 'http://terminology.hl7.org/CodeSystem/v2-0002',
      type: 'marital_status',
      code: 'G',
      display: 'Living together',
    },
    {
      system: 'http://terminology.hl7.org/CodeSystem/v2-0002',
      type: 'marital_status',
      code: 'P',
      display: 'Domestic partner',
    },
    {
      system: 'http://terminology.hl7.org/CodeSystem/v2-0002',
      type: 'marital_status',
      code: 'R',
      display: 'Registered domestic partner',
    },
    {
      system: 'http://terminology.hl7.org/CodeSystem/v2-0002',
      type: 'marital_status',
      code: 'E',
      display: 'Legally Separated',
    },
    {
      system: 'http://terminology.hl7.org/CodeSystem/v2-0002',
      type: 'marital_status',
      code: 'N',
      display: 'Annulled',
    },
    {
      system: 'http://terminology.hl7.org/CodeSystem/v2-0002',
      type: 'marital_status',
      code: 'I',
      display: 'Interlocutory',
    },
    {
      system: 'http://terminology.hl7.org/CodeSystem/v2-0002',
      type: 'marital_status',
      code: 'B',
      display: 'Unmarried',
    },
    {
      system: 'http://terminology.hl7.org/CodeSystem/v2-0002',
      type: 'marital_status',
      code: 'U',
      display: 'Unknown',
    },
    {
      system: 'http://terminology.hl7.org/CodeSystem/v2-0002',
      type: 'marital_status',
      code: 'O',
      display: 'Other',
    },
    {
      system: 'http://terminology.hl7.org/CodeSystem/v2-0002',
      type: 'marital_status',
      code: 'T',
      display: 'Unreported',
    },
  ]);
}
