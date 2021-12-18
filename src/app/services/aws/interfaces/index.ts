import { ReadStream } from 'fs';

export interface IS3Service {
  uploadFile(file: Express.Multer.File | { buffer: Buffer | ReadStream, mimetype: string }): Promise<string>;
}
