import { ReadStream } from 'fs';
import { injectable } from 'inversify';
import { IS3Service } from '../../../app/services';
import { error, GenericResponseError, HttpStatusCode, throwError } from '../../../app/utils';

@injectable()
export class TestS3Service implements IS3Service {

  public async uploadFile(file: Express.Multer.File | { buffer: Buffer | ReadStream, mimetype: string }): Promise<string> {
    try {
      if (!file) {
        throwError('File upload failed!', error.internalServer);
      }
    } catch (e: any) {
      throw new GenericResponseError(e.message, HttpStatusCode.INTERNAL_SERVER_ERROR);
    }

    // Set S3 params
    const uploadParams = {
      Bucket: `lafia-service`,
      Key: `videos/${Math.random().toString().slice(2, 6)}.mp4`,
      Body: { fileBuffer: 'someTestData' },
    };

    return `https://${uploadParams.Bucket}.s3.amazonaws.com/${uploadParams.Key}`;
  }
}
