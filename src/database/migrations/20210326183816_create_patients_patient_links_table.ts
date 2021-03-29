import * as Knex from 'knex';
import { Schema } from '../schema';
import { Table } from '../table';

// noinspection JSUnusedGlobalSymbols
export async function up(knex: Knex): Promise<void> {
  return knex
    .transaction(async (trx: Knex.Transaction) => trx.schema
      .createSchemaIfNotExists(Schema.lafiaService)
      .then(() => trx.schema.hasTable(Table.patients_patient_links)
        .then((tableExists: boolean) => {
          if (!tableExists) {
            return trx.schema
              .withSchema(Schema.lafiaService)
              .createTable(Table.patients_patient_links, (tableBuilder: Knex.CreateTableBuilder) => {
                tableBuilder
                  .uuid('id')
                  .unique()
                  .notNullable()
                  .defaultTo(knex.raw('gen_random_uuid()'))
                  .primary(`${Table.patients_patient_links}_id`);
                tableBuilder
                  .uuid('patient_id')
                  .comment('patient');
                tableBuilder
                  .uuid('patient_link_id')
                  .comment('patient_link');
                tableBuilder
                  .timestamps(true, true);

                // Set foreign key
                tableBuilder
                  .foreign('patient_id')
                  .references('id')
                  .inTable(`${Schema.lafiaService}.${Table.patients}`);
                tableBuilder
                  .foreign('patient_link_id')
                  .references('id')
                  .inTable(`${Schema.lafiaService}.${Table.patient_links}`);
              });
          }
        }))
      .catch((e) => console.error('MIGRATION_ERROR', e)));
}

// noinspection JSUnusedGlobalSymbols
export async function down(knex: Knex): Promise<void> {
  return knex.schema.withSchema(Schema.lafiaService).dropTableIfExists(Table.patients_patient_links);
}
