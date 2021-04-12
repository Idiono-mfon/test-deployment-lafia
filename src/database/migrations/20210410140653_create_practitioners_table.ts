import * as Knex from 'knex';
import { Schema } from '../schema';
import { Table } from '../table';

// noinspection JSUnusedGlobalSymbols
export async function up(knex: Knex): Promise<void> {
  return knex
    .transaction(async (trx: Knex.Transaction) => trx.schema
      .createSchemaIfNotExists(Schema.lafiaService)
      .then(() => trx.schema.hasTable(Table.practitioners)
        .then((tableExists: boolean) => {
          if (!tableExists) {
            return trx.schema
              .withSchema(Schema.lafiaService)
              .createTable(Table.practitioners, (tableBuilder: Knex.CreateTableBuilder) => {
                tableBuilder
                  .uuid('id')
                  .unique()
                  .notNullable()
                  .defaultTo(knex.raw('gen_random_uuid()'))
                  .primary(`${Table.practitioners}_id`);
                tableBuilder
                  .string('resource_type')
                  .defaultTo('Practitioner');
                tableBuilder
                  .uuid('narrative_id')
                  .comment('text');
                tableBuilder
                  .boolean('active')
                  .defaultTo(true)
                  .notNullable();
                tableBuilder
                  .enum('gender', ['male', 'female', 'other', 'unknown'])
                  .notNullable();
                tableBuilder
                  .date('birth_date');
                tableBuilder
                  .timestamps(true, true);

                // Setup foreign keys
                tableBuilder
                  .foreign('narrative_id')
                  .references('id')
                  .inTable(`${Schema.lafiaService}.${Table.narratives}`);
              });
          }
        }))
      .catch((e) => console.error('MIGRATION_ERROR', e)));
}

// noinspection JSUnusedGlobalSymbols
export async function down(knex: Knex): Promise<void> {
  return knex.schema.withSchema(Schema.lafiaService).dropTableIfExists(Table.practitioners);
}
