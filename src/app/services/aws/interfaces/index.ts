import { ReadStream } from 'fs';

export interface IS3Service {
  uploadFile(file: File): Promise<string>;
}

export interface IFile {
  buffer: Buffer | ReadStream;
  mimetype: string;
}

export type File = Express.Multer.File | IFile;
