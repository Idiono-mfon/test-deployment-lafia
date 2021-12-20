import { Knex } from 'knex';
import { Schema, Table } from '..';


export async function up(knex: Knex): Promise<void> {
  try {
    return knex.schema
      .withSchema(Schema.lafiaService)
      .raw(`
          ALTER TABLE "${Schema.lafiaService}".${Table.language_label}
              DROP CONSTRAINT language_label_language_id_foreign,
              DROP CONSTRAINT language_label_label_id_foreign,

              ADD CONSTRAINT language_label_language_id_foreign
                  FOREIGN KEY (language_id)
                      REFERENCES
                          "${Schema.lafiaService}".${Table.languages}
                              (id),
              ADD CONSTRAINT language_label_label_id_foreign
                  FOREIGN KEY (label_id)
                      REFERENCES
                          "${Schema.lafiaService}".${Table.labels}
                              (id);
      `);
  } catch (e) {
    console.error('MIGRATION_ERROR', e);
  }
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema
    .withSchema(Schema.lafiaService)
    .raw(`
        ALTER TABLE "${Schema.lafiaService}".${Table.language_label}
            DROP CONSTRAINT language_label_language_id_foreign,
            DROP CONSTRAINT language_label_label_id_foreign,

            ADD CONSTRAINT language_label_language_id_foreign
                FOREIGN KEY (language_id)
                    REFERENCES
                        "${Schema.lafiaService}".${Table.languages}
                            (id),
            ADD CONSTRAINT language_label_label_id_foreign
                FOREIGN KEY (label_id)
                    REFERENCES
                        "${Schema.lafiaService}".${Table.labels}
                            (id);
    `);
}

