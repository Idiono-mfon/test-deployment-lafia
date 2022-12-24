import { Knex } from 'knex';
import { Schema } from '../schema';
import { Table } from '../table';

// noinspection JSUnusedGlobalSymbols
export async function up(knex: Knex): Promise<void> {
  return knex.transaction(async (trx: Knex.Transaction) =>
    trx.schema
      .createSchemaIfNotExists(Schema.lafiaService)
      .then(() =>
        trx.schema
          .hasTable(Table.patient_contacts_codeable_concepts)
          .then((tableExists: boolean) => {
            if (!tableExists) {
              return trx.schema
                .withSchema(Schema.lafiaService)
                .createTable(
                  Table.patient_contacts_codeable_concepts,
                  (tableBuilder: Knex.CreateTableBuilder) => {
                    tableBuilder
                      .uuid('id')
                      .unique()
                      .notNullable()
                      .defaultTo(knex.raw('gen_random_uuid()'))
                      .primary({
                        constraintName: `${Table.patient_contacts_codeable_concepts}_id`,
                      });
                    tableBuilder.uuid('patient_contact_id');
                    tableBuilder.uuid('codeable_concept_id');
                    tableBuilder.timestamps(true, true);

                    // Set foreign key
                    tableBuilder
                      .foreign('patient_contact_id')
                      .references('id')
                      .inTable(`${Schema.lafiaService}.${Table.patient_contacts}`)
                      .onDelete('CASCADE')
                      .onUpdate('CASCADE');
                    tableBuilder
                      .foreign('codeable_concept_id')
                      .references('id')
                      .inTable(`${Schema.lafiaService}.${Table.codeable_concepts}`)
                      .onDelete('CASCADE')
                      .onUpdate('CASCADE');
                  }
                );
            }
          })
      )
      .catch((e) => console.error('MIGRATION_ERROR', e))
  );
}

// noinspection JSUnusedGlobalSymbols
export async function down(knex: Knex): Promise<void> {
  return knex.schema
    .withSchema(Schema.lafiaService)
    .dropTableIfExists(Table.patient_contacts_codeable_concepts);
}
