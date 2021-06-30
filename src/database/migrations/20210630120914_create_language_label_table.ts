import * as Knex from "knex";
import { Schema, Table } from "..";


export async function up(knex: Knex): Promise<void> {
    return knex
    .transaction(async (trx: Knex.Transaction) => trx.schema
      .createSchemaIfNotExists(Schema.lafiaService)
      .then(() => trx.schema.hasTable(Table.language_label)
        .then((tableExists: boolean) => {
          if (!tableExists) {
            return trx.schema
              .withSchema(Schema.lafiaService)
              .createTable(Table.language_label, (tableBuilder: Knex.CreateTableBuilder) => {
                tableBuilder
                  .uuid('id')
                  .unique()
                  .defaultTo(knex.raw('gen_random_uuid()'))
                  .primary(`${Table.language_label}_id`);
                tableBuilder
                  .uuid('language_id');
                tableBuilder
                  .uuid('label_id');
                tableBuilder
                  .timestamps(true, true);


                // Set foreign keys
                tableBuilder
                  .foreign('language_id')
                  .references('id')
                  .inTable(`${Schema.lafiaService}.${Table.languages}`)
                  .onUpdate('CASCADE');
                tableBuilder
                  .foreign('label_id')
                  .references('id')
                  .inTable(`${Schema.lafiaService}.${Table.labels}`)
                  .onUpdate('CASCADE');
              });
          }
        }))
      .catch((e) => console.error('MIGRATION_ERROR', e)));
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.withSchema(Schema.lafiaService).dropTableIfExists(Table.language_label);
}

