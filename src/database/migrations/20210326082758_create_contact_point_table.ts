import * as Knex from 'knex';
import { Schema } from '../schema';
import { Table } from '../table';

// noinspection JSUnusedGlobalSymbols
export async function up(knex: Knex): Promise<void> {
  return knex
    .transaction(async (trx: Knex.Transaction) => trx.schema
      .createSchemaIfNotExists(Schema.lafiaService)
      .then(() => trx.schema.hasTable(Table.contact_points)
        .then((tableExists: boolean) => {
          if (!tableExists) {
            return trx.schema
              .withSchema(Schema.lafiaService)
              .createTable(Table.contact_points, (tableBuilder: Knex.CreateTableBuilder) => {
                tableBuilder
                  .uuid('id')
                  .unique()
                  .notNullable()
                  .defaultTo(knex.raw('gen_random_uuid()'))
                  .primary(`${Table.contact_points}_id`);
                tableBuilder
                  .enum('use', ['home', 'work', 'temp', 'old', 'mobile'])
                  .notNullable();
                tableBuilder
                  .enum('system', ['phone', 'fax', 'email', 'pager', 'url', 'sms', 'other'])
                  .notNullable();
                tableBuilder
                  .string('value');
                tableBuilder
                  .enum('rank', [0, 1]);
                tableBuilder
                  .uuid('period_id')
                  .comment('period')
                  .unique();
                tableBuilder
                  .timestamps(true, true);

                // Set foreign key
                tableBuilder
                  .foreign('period_id')
                  .references('id')
                  .inTable(`${Schema.lafiaService}.${Table.periods}`);
              });
          }
        }))
      .catch((e) => console.error('MIGRATION_ERROR', e)));
}

// noinspection JSUnusedGlobalSymbols
export async function down(knex: Knex): Promise<void> {
  return knex.schema.withSchema(Schema.lafiaService).dropTableIfExists(Table.contact_points);
}
