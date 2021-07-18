import * as Knex from "knex";
import { Schema, Table } from "..";


export async function up(knex: Knex): Promise<void> {
    try {
        return await knex.schema
          .withSchema(Schema.lafiaService)
          .table(Table.language_label, (table: Knex.TableBuilder) => {
                table.dropForeign(['language_id', 'label_id']);
                table.foreign('language_id')
                    .references('id')
                    .inTable(`${Schema.lafiaService}.${Table.languages}`)
                    .onUpdate('CASCADE').onDelete('NO ACTION');
                table.foreign('label_id')
                    .references('id')
                    .inTable(`${Schema.lafiaService}.${Table.labels}`)
                    .onUpdate('CASCADE').onDelete('NO ACTION');
          });
      } catch (e) {
        console.error('MIGRATION_ERROR', e);
      }
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.withSchema(Schema.lafiaService)
    .table(Table.language_label, (table: Knex.TableBuilder) => {
        table.dropForeign(['language_id', 'label_id']);
        table.foreign('language_id')
            .references('id')
            .inTable(`${Schema.lafiaService}.${Table.languages}`)
            .onUpdate('CASCADE');
        table.foreign('label_id')
            .references('id')
            .inTable(`${Schema.lafiaService}.${Table.labels}`)
            .onUpdate('CASCADE');
    });
}

