import { Knex } from 'knex';
import { Schema, Table } from '..';


export async function up(knex: Knex): Promise<void> {
  return knex
    .transaction(async (trx: Knex.Transaction) => trx.schema
      .createSchemaIfNotExists(Schema.lafiaService)
      .then(() => trx.schema.hasTable(Table.appointment_responses)
        .then((tableExists: boolean) => {
          if (!tableExists) {
            return trx.schema
              .withSchema(Schema.lafiaService)
              .createTable(Table.appointment_responses, (tableBuilder: Knex.CreateTableBuilder) => {
                tableBuilder
                  .uuid('id')
                  .unique()
                  .notNullable()
                  .defaultTo(knex.raw('gen_random_uuid()'))
                  .primary({ constraintName: `${Table.appointment_responses}_id` });
                tableBuilder
                  .string('resource_type')
                  .defaultTo('Claim');
                tableBuilder
                  .string('resource_id')
                  .unique()
                  .notNullable();
                tableBuilder
                  .string('appointment')
                  .notNullable()
                  .comment('Appointment/appointment_id');
                tableBuilder
                  .string('participant_status')
                  .notNullable();
                tableBuilder
                  .text('comment')
                  .notNullable();
                tableBuilder
                  .timestamps(true, true);
              });
          }
        }))
      .catch((e) => console.error('MIGRATION_ERROR', e)));
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema.withSchema(Schema.lafiaService).dropTableIfExists(Table.appointment_responses);
}

