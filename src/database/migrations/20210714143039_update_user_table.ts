import * as Knex from "knex";
import { Schema, Table } from "..";


export async function up(knex: Knex): Promise<void> {
    return knex
    .transaction(async (trx: Knex.Transaction) => trx.schema
      .createSchemaIfNotExists(Schema.lafiaService)
      .then(() => trx.schema.hasTable(Table.users)
        .then((tableExists: boolean) => {
          if (tableExists) {
            return trx.schema
              .withSchema(Schema.lafiaService)
              .table(Table.users, (table: Knex.AlterTableBuilder) => {
                table.string('phone');
                table.boolean('hasVerifiedPhone');
                table.boolean('hasVerifiedEmail');
                });
            }
        }))
      .catch((e) => console.error('MIGRATION_ERROR', e)));
}


export async function down(knex: Knex): Promise<void> {
    return knex
    .transaction(async (trx: Knex.Transaction) => trx.schema
      .createSchemaIfNotExists(Schema.lafiaService)
      .then(() => trx.schema.hasTable(Table.users)
        .then((tableExists: boolean) => {
          if (tableExists) {
            return trx.schema
              .withSchema(Schema.lafiaService)
              .table(Table.users, (table: Knex.AlterTableBuilder) => {
                table.dropColumn('phone');
                table.dropColumn('hasVerifiedPhone');
                table.dropColumn('hasVerifiedEmail');
                });
            }
        }))
      .catch((e) => console.error('MIGRATION_ERROR', e)));
}

