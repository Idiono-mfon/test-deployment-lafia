import { Knex } from 'knex';
import { Schema, Table } from '..';


export async function up(knex: Knex): Promise<void> {
  try {
    return await knex.schema
      .withSchema(Schema.lafiaService)
      .table(Table.video_broadcasts, (tableBuilder: Knex.TableBuilder) => {
        tableBuilder
          .string('appointment_ref')
          .comment('Appointment/resource_id')
          .nullable();
      });
  } catch (e) {
    console.error('MIGRATION_ERROR', e);
  }
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema.withSchema(Schema.lafiaService)
    .table(Table.video_broadcasts, (tableBuilder: Knex.TableBuilder) => {
      tableBuilder.dropColumn('appointment_ref');
    });
}

