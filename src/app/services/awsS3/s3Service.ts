import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { injectable } from 'inversify';
import { v4 as uuidV4 } from 'uuid';
import { Env } from '../../config/env';
import {
  error,
  GenericResponseError,
  HttpStatusCode,
  throwError
} from '../../utils';

const env = Env.all();

@injectable()
export class S3Service {
  private s3: any;

  constructor() {
    // Setup S3 credentials
    this.s3 = new S3Client({
      region: env.aws_region,
      credentials: {
        accessKeyId: env.aws_access_key_id,
        secretAccessKey: env.aws_secret_access_Key
      }
    });
  }

  public async uploadFile(file: Express.Multer.File): Promise<string> {
    try {
      if (!file) {
        throwError('File upload failed!', error.internalServer);
      }
    } catch (e) {
      throw new GenericResponseError(e.message, HttpStatusCode.INTERNAL_SERVER_ERROR);
    }

    const { buffer: fileBuffer, mimetype } = file;

    console.log('File:', file);

    // Extract file extension
    const [type, ext] = mimetype.split('/');

    // Set S3 params
    const uploadParams = {
      Bucket: `${env.aws_bucket}`,
      Key: `videos/${uuidV4()}.${ext}`,
      Body: fileBuffer,
      ACL: 'public-read'
    };

    try {
      // Upload to S3
      await this.s3.send(new PutObjectCommand(uploadParams));

      // Return object link
      return `https://${uploadParams.Bucket}.s3.amazonaws.com/${uploadParams.Key}`;
    } catch (e) {
      throw new GenericResponseError(e.code || 500, e.message);
    }
  }
}
