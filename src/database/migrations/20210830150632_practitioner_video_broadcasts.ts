import * as Knex from "knex";
import { Table } from "..";
import { Schema } from "../schema";


export async function up(knex: Knex): Promise<void> {
    return knex
    .transaction(async (trx: Knex.Transaction) => trx.schema
      .createSchemaIfNotExists(Schema.lafiaService)
      .then(() => trx.schema.hasTable(Table.practitioner_video_broadcasts)
        .then((tableExists: boolean) => {
          if (!tableExists) {
            return trx.schema
              .withSchema(Schema.lafiaService)
              .createTable(Table.practitioner_video_broadcasts, (tableBuilder: Knex.CreateTableBuilder) => {
                tableBuilder
                  .uuid('id')
                  .unique()
                  .notNullable()
                  .defaultTo(knex.raw('gen_random_uuid()'))
                  .primary(`${Table.practitioner_video_broadcasts}_id`);
                tableBuilder
                  .string('practitioner_id')
                  .notNullable();
                tableBuilder
                  .uuid('video_broadcast_id');
                tableBuilder
                  .timestamps(true, true);
              });
          }
        }))
      .catch((e) => console.error('MIGRATION_ERROR', e)));
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.withSchema(Schema.lafiaService).dropTableIfExists(Table.practitioner_video_broadcasts);
}

