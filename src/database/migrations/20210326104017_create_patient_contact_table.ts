import * as Knex from 'knex';
import { Schema } from '../schema';
import { Table } from '../table';

// noinspection JSUnusedGlobalSymbols
export async function up(knex: Knex): Promise<void> {
  return knex
    .transaction(async (trx: Knex.Transaction) => trx.schema
      .createSchemaIfNotExists(Schema.lafiaService)
      .then(() => trx.schema.hasTable(Table.patient_contacts)
        .then((tableExists: boolean) => {
          if (!tableExists) {
            return trx.schema
              .withSchema(Schema.lafiaService)
              .createTable(Table.patient_contacts, (tableBuilder: Knex.CreateTableBuilder) => {
                tableBuilder
                  .uuid('id')
                  .unique()
                  .notNullable()
                  .defaultTo(knex.raw('gen_random_uuid()'))
                  .primary(`${Table.patient_contacts}_id`);
                tableBuilder
                  .uuid('human_name_id')
                  .comment('name');
                tableBuilder
                  .uuid('address_id')
                  .comment('address');
                tableBuilder
                  .enum('gender', ['male', 'female', 'other', 'unknown'])
                  .notNullable();
                tableBuilder
                  .uuid('reference_id')
                  .comment('organization');
                tableBuilder
                  .uuid('period_id')
                  .comment('period');
                tableBuilder
                  .timestamps(true, true);
              });
          }
        }))
      .catch((e) => console.error('MIGRATION_ERROR', e)));
}

// noinspection JSUnusedGlobalSymbols
export async function down(knex: Knex): Promise<void> {
  return knex.schema.withSchema(Schema.lafiaService).dropTableIfExists(Table.patient_contacts);
}
