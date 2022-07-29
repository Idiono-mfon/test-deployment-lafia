import { Knex } from "knex";
import { Schema, Table } from '..';

export async function up(knex: Knex): Promise<void> {
  try {
    return await knex.schema
      .withSchema(Schema.lafiaService)
      .table(Table.encounters, (tableBuilder: Knex.TableBuilder) => {
        tableBuilder
          .string('resource_id')
          .unique()
          .notNullable();
        tableBuilder
          .string('subject')
          .notNullable()
          .comment('Patient/patient_id');
        tableBuilder
          .string('participant')
          .notNullable()
          .comment('chief participant, eg., a pratitioner as Practitioner/practitioner_id');
        tableBuilder
          .string('service_provider')
          .notNullable()
          .comment('Organization/organization_id');
      });
  } catch (e) {
    console.error('MIGRATION_ERROR', e);
  }
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema.withSchema(Schema.lafiaService)
    .table(Table.encounters, (tableBuilder: Knex.TableBuilder) => {
      tableBuilder.dropColumn('resource_id');
      tableBuilder.dropColumn('subject');
      tableBuilder.dropColumn('service_provider');
      tableBuilder.dropColumn('participant');
    });
}

