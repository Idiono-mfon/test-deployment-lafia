import { Knex } from 'knex';
import { Schema, Table } from '..';

export async function up(knex: Knex): Promise<void> {
  try {
    return await knex.schema
      .withSchema(Schema.lafiaService)
      .table(Table.users, (tableBuilder: Knex.TableBuilder) => {
        tableBuilder.string('care_type').defaultTo('');
        tableBuilder.string('medical_specialty').defaultTo('');
        tableBuilder.string('country').defaultTo('');
        tableBuilder.string('birth_date').defaultTo('');
      });
  } catch (e) {
    console.error('MIGRATION_ERROR', e);
  }
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema
    .withSchema(Schema.lafiaService)
    .table(Table.users, (tableBuilder: Knex.TableBuilder) => {
      tableBuilder.dropColumn('care_type');
      tableBuilder.dropColumn('medical_specialty');
      tableBuilder.dropColumn('country');
      tableBuilder.dropColumn('birth_date');
    });
}
