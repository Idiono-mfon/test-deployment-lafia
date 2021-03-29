import * as Knex from 'knex';
import { Schema } from '../schema';
import { Table } from '../table';

// noinspection JSUnusedGlobalSymbols
export async function up(knex: Knex): Promise<void> {
  return knex
    .transaction(async (trx: Knex.Transaction) => trx.schema
      .createSchemaIfNotExists(Schema.lafiaService)
      .then(() => trx.schema.hasTable(Table.identifiers)
        .then((tableExists: boolean) => {
          if (!tableExists) {
            return trx.schema
              .withSchema(Schema.lafiaService)
              .createTable(Table.identifiers, (tableBuilder: Knex.CreateTableBuilder) => {
                tableBuilder
                  .uuid('id')
                  .unique()
                  .notNullable()
                  .defaultTo(knex.raw('gen_random_uuid()'))
                  .primary(`${Table.identifiers}_id`);
                tableBuilder
                  .enum('use', ['usual', 'official', 'temp', 'secondary', 'old'])
                  .notNullable();
                tableBuilder
                  .uuid('codeable_concept_id')
                  .comment('type');
                tableBuilder
                  .string('system');
                tableBuilder
                  .string('value')
                  .unique();
                tableBuilder
                  .uuid('period_id')
                  .comment('period')
                  .unique();
                tableBuilder
                  .timestamps(true, true);

                // Set foreign key
                tableBuilder
                  .foreign('codeable_concept_id')
                  .references('id')
                  .inTable(`${Schema.lafiaService}.${Table.codeable_concepts}`);
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
  return knex.schema.withSchema(Schema.lafiaService).dropTableIfExists(Table.identifiers);
}
