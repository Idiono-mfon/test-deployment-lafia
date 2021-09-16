import * as Knex from "knex";
import { Schema, Table } from "..";


export async function up(knex: Knex): Promise<void> {
    return knex
    .transaction(async (trx: Knex.Transaction) => trx.schema
      .createSchemaIfNotExists(Schema.lafiaService)
      .then(() => trx.schema.hasTable(Table.implementation_guides)
        .then((tableExists: boolean) => {
          if (!tableExists) {
            return trx.schema
              .withSchema(Schema.lafiaService)
              .createTable(Table.implementation_guides, (tableBuilder: Knex.CreateTableBuilder) => {
                tableBuilder
                  .uuid('id')
                  .unique()
                  .notNullable()
                  .defaultTo(knex.raw('gen_random_uuid()'))
                  .primary(`${Table.implementation_guides}_id`);
                tableBuilder
                  .string('name')
                  .notNullable();
                tableBuilder
                  .string('slug')
                  .notNullable();
                tableBuilder
                  .timestamps(true, true);
              });
          }
        }))
      .catch((e) => console.error('MIGRATION_ERROR', e)));
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.withSchema(Schema.lafiaService).dropTableIfExists(Table.implementation_guides);
}

