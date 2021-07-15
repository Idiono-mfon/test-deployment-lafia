import * as Knex from "knex";
import { Schema, Table } from "..";


export async function up(knex: Knex): Promise<void> {
    return knex
    .transaction(async (trx: Knex.Transaction) => trx.schema
        .createSchemaIfNotExists(Schema.lafiaService)
        .then(() => trx.schema.hasTable(Table.languages)
            .then((tableExists: boolean) => {
            if (tableExists) {
                return trx.schema
                .withSchema(Schema.lafiaService)
                .alterTable(Table.languages, (table: Knex.AlterTableBuilder) => {
                    table.dropForeign(['language_id', 'label_id']);
                    table.foreign('language_id')
                    .references('id')
                    .inTable(`${Schema.lafiaService}.${Table.languages}`)
                    .onUpdate('CASCADE').onDelete('NO ACTION');
                    table.foreign('label_id')
                    .references('id')
                    .inTable(`${Schema.lafiaService}.${Table.languages}`)
                    .onUpdate('CASCADE').onDelete('NO ACTION');
                    });
                }
            }))
        .catch((e) => console.error('MIGRATION_ERROR', e))
    );
}


export async function down(knex: Knex): Promise<void> {
    return knex
    .transaction(async (trx: Knex.Transaction) => trx.schema
        .createSchemaIfNotExists(Schema.lafiaService)
        .then(() => trx.schema.hasTable(Table.languages)
            .then((tableExists: boolean) => {
            if (tableExists) {
                return trx.schema
                .withSchema(Schema.lafiaService)
                .alterTable(Table.languages, (table: Knex.AlterTableBuilder) => {
                    table.dropForeign(['language_id', 'label_id']);
                    table.foreign('language_id')
                    .references('id')
                    .inTable(`${Schema.lafiaService}.${Table.languages}`)
                    .onUpdate('CASCADE');
                    table.foreign('label_id')
                    .references('id')
                    .inTable(`${Schema.lafiaService}.${Table.languages}`)
                    .onUpdate('CASCADE');
                    });
                }
            }))
        .catch((e) => console.error('MIGRATION_ERROR', e))
    );
}

