import { Knex } from 'knex';
import { Schema, Table } from '..';


export async function up(knex: Knex): Promise<void> {
  return knex
    .transaction(async (trx: Knex.Transaction) => trx.schema
      .createSchemaIfNotExists(Schema.lafiaService)
      .then(() => trx.schema.hasTable(Table.appointments)
        .then((tableExists: boolean) => {
          if (!tableExists) {
            return trx.schema
              .withSchema(Schema.lafiaService)
              .createTable(Table.appointments, (tableBuilder: Knex.CreateTableBuilder) => {
                tableBuilder
                  .uuid('id')
                  .unique()
                  .notNullable()
                  .defaultTo(knex.raw('gen_random_uuid()'))
                  .primary({ constraintName: `${Table.appointments}_id` });
                tableBuilder
                  .string('resource_type')
                  .defaultTo('Claim');
                tableBuilder
                  .string('resource_id')
                  .unique()
                  .notNullable();
                tableBuilder
                  .string('status')
                  .notNullable();
                tableBuilder
                  .string('patient_participant')
                  .notNullable()
                  .comment('Patient/patient_id');
                tableBuilder
                  .string('practitioner_participant')
                  .notNullable()
                  .comment('Practitioner/patient_id');
                tableBuilder
                  .integer('priority');
                tableBuilder
                  .text('description');
                tableBuilder
                  .timestamps(true, true);
              });
          }
        }))
      .catch((e) => console.error('MIGRATION_ERROR', e)));
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema.withSchema(Schema.lafiaService).dropTableIfExists(Table.appointments);
}

