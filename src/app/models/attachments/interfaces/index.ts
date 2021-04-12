import { IBase } from '../../base';

export interface IAttachment extends IBase {
  contentType: string;
  language?: string;
  data?: Buffer;
  url?: string;
  size?: number;
  hash?: Buffer;
  title?: string;
  creation: Date;
}
