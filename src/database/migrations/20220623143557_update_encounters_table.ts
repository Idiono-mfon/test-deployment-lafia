import { Knex } from "knex";
import { Schema, Table } from '..';

export async function up(knex: Knex): Promise<void> {
  try {
    return await knex.schema
      .withSchema(Schema.lafiaService)
      .table(Table.encounters, (tableBuilder: Knex.TableBuilder) => {
        tableBuilder.string('class');
        tableBuilder.string('service_type');
        tableBuilder.string('reason_code');
        tableBuilder.string('reason_description');
        tableBuilder.date('start');
        tableBuilder.date('end');
      });
  } catch (e) {
    console.error('MIGRATION_ERROR', e);
  }
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema.withSchema(Schema.lafiaService)
    .table(Table.encounters, (tableBuilder: Knex.TableBuilder) => {
      tableBuilder.dropColumn('class');
      tableBuilder.dropColumn('service_type');
      tableBuilder.dropColumn('reason_code');
      tableBuilder.dropColumn('reason_description');
      tableBuilder.dropColumn('start');
      tableBuilder.dropColumn('end');
    });
}

