import { JSONSchema, Modifiers, QueryBuilder } from 'objection';
import { Schema, Table } from '../../../database';
import { BaseModel } from '../base';
import { IAttachment } from './interfaces';
import { AttachmentValidation } from './validation';

export class AttachmentModel extends BaseModel implements IAttachment {
  url!: IAttachment['url'];
  data!: IAttachment['data'];
  hash!: IAttachment['hash'];
  size!: IAttachment['size'];
  title!: IAttachment['title'];
  language!: IAttachment['language'];
  creation!: IAttachment['creation'];
  contentType!: IAttachment['contentType'];

  static get tableName(): string {
    return `${Schema.lafiaService}.${Table.attachments}`
  }

  static get jsonSchema(): JSONSchema {
    return AttachmentValidation;
  }

  static get hidden(): string[] {
    return ['updatedAt', 'createdAt'];
  }

  static get modifiers(): Modifiers {
    return {
      selectId(builder: QueryBuilder<any, any[]>) {
        builder.select(
          `${Schema.lafiaService}.${Table.attachments}.id`
        );
      },
    };
  }
}
