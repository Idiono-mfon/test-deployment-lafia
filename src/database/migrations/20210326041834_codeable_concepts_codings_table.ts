import { Knex } from 'knex';
import { Schema } from '../schema';
import { Table } from '../table';

// noinspection JSUnusedGlobalSymbols
export async function up(knex: Knex): Promise<void> {
  return knex
    .transaction(async (trx: Knex.Transaction) => trx.schema
      .createSchemaIfNotExists(Schema.lafiaService)
      .then(() => trx.schema.hasTable(Table.codeable_concepts_codings)
        .then((tableExists: boolean) => {
          if (!tableExists) {
            return trx.schema
              .withSchema(Schema.lafiaService)
              .createTable(Table.codeable_concepts_codings, (tableBuilder: Knex.CreateTableBuilder) => {
                tableBuilder
                  .uuid('id')
                  .unique()
                  .defaultTo(knex.raw('gen_random_uuid()'))
                  .primary({ constraintName: `${Table.codeable_concepts_codings}_id` });
                tableBuilder
                  .uuid('codeable_concept_id');
                tableBuilder
                  .uuid('coding_id');
                tableBuilder
                  .timestamps(true, true);


                // Set foreign keys
                tableBuilder
                  .foreign('codeable_concept_id')
                  .references('id')
                  .inTable(`${Schema.lafiaService}.${Table.codeable_concepts}`)
                  .onUpdate('CASCADE');
                tableBuilder
                  .foreign('coding_id')
                  .references('id')
                  .inTable(`${Schema.lafiaService}.${Table.codings}`)
                  .onUpdate('CASCADE');
              });
          }
        }))
      .catch((e) => console.error('MIGRATION_ERROR', e)));
}

// noinspection JSUnusedGlobalSymbols
export async function down(knex: Knex): Promise<void> {
  return knex.schema.withSchema(Schema.lafiaService).dropTableIfExists(Table.codeable_concepts_codings);
}
