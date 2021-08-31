import * as Knex from "knex";
import { Schema } from "../schema";
import { Table } from "../table";


export async function up(knex: Knex): Promise<void> {
    return knex
    .transaction(async (trx: Knex.Transaction) => trx.schema
      .createSchemaIfNotExists(Schema.lafiaService)
      .then(() => trx.schema.hasTable(Table.video_broadcasts)
        .then((tableExists: boolean) => {
          if (!tableExists) {
            return trx.schema
              .withSchema(Schema.lafiaService)
              .createTable(Table.video_broadcasts, (tableBuilder: Knex.CreateTableBuilder) => {
                tableBuilder
                  .uuid('id')
                  .unique()
                  .notNullable()
                  .defaultTo(knex.raw('gen_random_uuid()'))
                  .primary(`${Table.video_broadcasts}_id`);
                tableBuilder
                  .string('patient_id')
                  .notNullable();
                tableBuilder
                  .string('video_url');
                tableBuilder
                  .string('initiate_care')
                  .notNullable();
                tableBuilder
                  .string('description');
                tableBuilder
                  .timestamps(true, true);
              });
          }
        }))
      .catch((e) => console.error('MIGRATION_ERROR', e)));
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.withSchema(Schema.lafiaService).dropTableIfExists(Table.video_broadcasts);
}

