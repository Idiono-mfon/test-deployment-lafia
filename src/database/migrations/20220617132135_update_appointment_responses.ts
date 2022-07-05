import { Knex } from 'knex';
import { Schema, Table } from '..';


export async function up(knex: Knex): Promise<void> {
  try {
    return await knex.schema
      .withSchema(Schema.lafiaService)
      .table(Table.appointment_responses, (tableBuilder: Knex.TableBuilder) => {
        tableBuilder
          .string('patient_participant')
          .notNullable()
          .comment('Patient/patient_id');
        tableBuilder
          .string('practitioner_participant')
          .notNullable()
          .comment('Practitioner/patient_id');
      });
  } catch (e) {
    console.error('MIGRATION_ERROR', e);
  }
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema.withSchema(Schema.lafiaService)
    .table(Table.appointment_responses, (tableBuilder: Knex.TableBuilder) => {
      tableBuilder.dropColumn('patient_participant');
      tableBuilder.dropColumn('practitioner_participant');
    });
}

