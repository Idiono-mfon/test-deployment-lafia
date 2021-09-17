import * as Knex from "knex";
import { Schema } from '../schema';
import { Table } from '../table';
import { fhirResource, igFhir } from './fhirResources';
import { implementationGuides } from './implementationGuides';

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex(`${Schema.lafiaService}.${Table.fhir_resources}`).del();
    await knex(`${Schema.lafiaService}.${Table.implementation_guides}`).del();
    await knex(`${Schema.lafiaService}.${Table.implementation_guide_fhir_resource}`).del();

    // Inserts seed entries
    await knex(`${Schema.lafiaService}.${Table.fhir_resources}`).insert([
      ...fhirResource
    ]);

    await knex(`${Schema.lafiaService}.${Table.implementation_guides}`).insert([
      ...implementationGuides
    ]);

    await knex(`${Schema.lafiaService}.${Table.implementation_guide_fhir_resource}`).insert([
      ...igFhir
    ]);
}
