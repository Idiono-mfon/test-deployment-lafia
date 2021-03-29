import { JSONSchema } from 'objection';
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
  content_type!: IAttachment['content_type'];

  static get tableName(): string {
    return `${Schema.lafiaService}.${Table.attachments}`
  }

  static get jsonSchema(): JSONSchema {
    return AttachmentValidation;
  }
}
