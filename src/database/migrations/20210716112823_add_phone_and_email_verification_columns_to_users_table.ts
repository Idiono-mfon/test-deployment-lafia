import * as Knex from 'knex';
import { Schema } from '../schema';
import { Table } from '../table';

export async function up(knex: Knex): Promise<void> {
  try {
    return await knex.schema
      .withSchema(Schema.lafiaService)
      .table(Table.users, (tableBuilder: Knex.TableBuilder) => {
        tableBuilder.string('phone');
        tableBuilder.boolean('has_verified_phone');
        tableBuilder.boolean('has_verified_email');

      });
  } catch (e) {
    console.error('MIGRATION_ERROR', e);
  }
}

// noinspection JSUnusedGlobalSymbols
export async function down(knex: Knex): Promise<void> {
  return knex.schema.withSchema(Schema.lafiaService)
    .table(Table.users, (tableBuilder: Knex.TableBuilder) => {
      tableBuilder.dropColumn('phone');
      tableBuilder.dropColumn('has_verified_email');
      tableBuilder.dropColumn('has_verified_phone');
    });
}