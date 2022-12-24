import { Knex } from 'knex';
import { Schema } from '../schema';
import { Table } from '../table';

// noinspection JSUnusedGlobalSymbols
export async function up(knex: Knex): Promise<void> {
  return knex.transaction(async (trx: Knex.Transaction) =>
    trx.schema
      .createSchemaIfNotExists(Schema.lafiaService)
      .then(() =>
        trx.schema.hasTable(Table.patients_attachments).then((tableExists: boolean) => {
          if (!tableExists) {
            return trx.schema
              .withSchema(Schema.lafiaService)
              .createTable(Table.patients_attachments, (tableBuilder: Knex.CreateTableBuilder) => {
                tableBuilder
                  .uuid('id')
                  .unique()
                  .notNullable()
                  .defaultTo(knex.raw('gen_random_uuid()'))
                  .primary({ constraintName: `${Table.patients_attachments}_id` });
                tableBuilder.uuid('patient_id');
                tableBuilder.uuid('attachment_id');
                tableBuilder.timestamps(true, true);

                // Set foreign key
                tableBuilder
                  .foreign('patient_id')
                  .references('id')
                  .inTable(`${Schema.lafiaService}.${Table.patients}`)
                  .onDelete('CASCADE')
                  .onUpdate('CASCADE');
                tableBuilder
                  .foreign('attachment_id')
                  .references('id')
                  .inTable(`${Schema.lafiaService}.${Table.attachments}`)
                  .onDelete('CASCADE')
                  .onUpdate('CASCADE');
              });
          }
        })
      )
      .catch((e) => console.error('MIGRATION_ERROR', e))
  );
}

// noinspection JSUnusedGlobalSymbols
export async function down(knex: Knex): Promise<void> {
  return knex.schema.withSchema(Schema.lafiaService).dropTableIfExists(Table.patients_attachments);
}
