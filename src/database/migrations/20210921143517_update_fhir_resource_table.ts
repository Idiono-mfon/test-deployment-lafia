import * as Knex from "knex";
import { Schema, Table } from "..";


export async function up(knex: Knex): Promise<void> {
    try {
        return await knex.schema
            .withSchema(Schema.lafiaService)
            .table(Table.fhir_resources, (tableBuilder: Knex.TableBuilder) => {
                tableBuilder.text('photo');
        });
    } catch (e) {
        console.error('MIGRATION_ERROR', e);
    }
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.withSchema(Schema.lafiaService)
    .table(Table.fhir_resources, (tableBuilder: Knex.TableBuilder) => {
        tableBuilder.dropColumn('photo');
    });
}

