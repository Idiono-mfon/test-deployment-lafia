import { Knex } from 'knex';
import { Schema } from '../schema';
import { Table } from '../table';

export async function up(knex: Knex): Promise<void> {
  try {
    return knex.schema
      .withSchema(Schema.lafiaService)
      .raw(`
          ALTER TABLE "${Schema.lafiaService}".${Table.users}
              ALTER COLUMN first_name DROP NOT NULL,
              ALTER COLUMN last_name DROP NOT NULL;
      `);
  } catch (e) {
    console.error('MIGRATION_ERROR', e);
  }
}

// noinspection JSUnusedGlobalSymbols
export async function down(knex: Knex): Promise<void> {
  return knex.schema.withSchema(Schema.lafiaService)
    .raw(`
        ALTER TABLE "${Schema.lafiaService}".${Table.users}
            ALTER COLUMN first_name DROP NOT NULL,
            ALTER COLUMN last_name DROP NOT NULL;
    `);
}
