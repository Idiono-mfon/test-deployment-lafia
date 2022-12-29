import { Knex } from 'knex';
import { Schema, Table } from '..';

export async function up(knex: Knex): Promise<void> {
  try {
    return await knex.schema
      .withSchema(Schema.lafiaService)
      .table(Table.users, (tableBuilder: Knex.TableBuilder) => {
        tableBuilder
          .boolean('accept_sla')
          .defaultTo(true)
          .comment('Accept_service_level_agreement');
      });
  } catch (e) {
    console.error('MIGRATION_ERROR', e);
  }
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema
    .withSchema(Schema.lafiaService)
    .table(Table.users, (tableBuilder: Knex.TableBuilder) => {
      tableBuilder.dropColumn('accept_sla');
    });
}
