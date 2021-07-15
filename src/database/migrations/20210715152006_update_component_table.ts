import * as Knex from "knex";
import { Schema, Table } from "..";


export async function up(knex: Knex): Promise<void> {
    return knex
    .transaction(async (trx: Knex.Transaction) => trx.schema
      .createSchemaIfNotExists(Schema.lafiaService)
      .then(() => trx.schema.hasTable(Table.components)
        .then((tableExists: boolean) => {
          if (tableExists) {
            return trx.schema
                .withSchema(Schema.lafiaService)
                .alterTable(Table.components, (table: Knex.AlterTableBuilder) => {
                    table.string('language_id');
                });
            }
        }))
      .catch((e) => console.error('MIGRATION_ERROR', e)));
}


export async function down(knex: Knex): Promise<void> {
    return knex
    .transaction(async (trx: Knex.Transaction) => trx.schema
      .createSchemaIfNotExists(Schema.lafiaService)
      .then(() => trx.schema.hasTable(Table.components)
        .then((tableExists: boolean) => {
          if (tableExists) {
            return trx.schema
              .withSchema(Schema.lafiaService)
              .table(Table.components, (table: Knex.AlterTableBuilder) => {
                table
                  .dropColumn('language_id');
                });
            }
        }))
      .catch((e) => console.error('MIGRATION_ERROR', e)));
}