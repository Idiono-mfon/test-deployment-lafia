export interface IAttachment {
  id?: string;
  content_type: string;
  language?: string;
  data?: Buffer;
  url?: string;
  size?: number;
  hash?: Buffer;
  title?: string;
  creation: Date;
}
