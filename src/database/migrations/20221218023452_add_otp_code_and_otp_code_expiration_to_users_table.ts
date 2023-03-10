import { Knex } from 'knex';
import { Schema, Table } from '..';

export async function up(knex: Knex): Promise<void> {
  try {
    return await knex.schema
      .withSchema(Schema.lafiaService)
      .table(Table.users, (tableBuilder: Knex.TableBuilder) => {
        tableBuilder.string('otp_code').nullable();
        tableBuilder.dateTime('otp_code_expiration').nullable();
      });
  } catch (e) {
    console.error('MIGRATION_ERROR', e);
  }
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema
    .withSchema(Schema.lafiaService)
    .table(Table.users, (tableBuilder: Knex.TableBuilder) => {
      tableBuilder.dropColumn('otp_code');
      tableBuilder.dropColumn('otp_code_expiration');
    });
}
