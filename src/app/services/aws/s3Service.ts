import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { injectable } from 'inversify';
import { v4 as uuidV4 } from 'uuid';
import { File, IS3Service } from './interfaces';
import { Env, IEnv } from '../../config/env';
import {
  error,
  GenericResponseError,
  HttpStatusCode, logger,
  throwError
} from '../../utils';

@injectable()
export class S3Service implements IS3Service {
  private s3: any;
  private readonly env: IEnv;

  constructor() {
    this.env = Env.all();

    // Setup S3 credentials
    this.s3 = new S3Client({
      region: this.env.aws_region,
      credentials: {
        accessKeyId: this.env.aws_access_key_id,
        secretAccessKey: this.env.aws_secret_access_Key
      }
    });
  }

  private static getUploadLogicalFolder(ext: string): string {
    logger.info('Running S3Service.getUploadLogicalFolder');

    let logicalFolder: string = 'others';

    const imageExtensions = ['jpg', 'jpeg', 'png', 'gif', 'svg', 'ico'];
    const videoExtensions = ['mp4', 'webm', 'ogg', 'ogv', 'avi', 'mov'];
    const audioExtensions = ['mp3', 'wav', 'ogg', 'oga', 'm4a'];
    const documentExtensions = [
      'pdf', 'doc', 'docx', 'xls', 'xlsx', 'odf',
      'ppt', 'pptx', 'txt', 'rtf', 'csv', 'odt',
      'html', 'htm', 'xml', 'json', 'yaml', 'js',
      'yml', 'md', 'markdown', 'csv', 'tsv', 'css',
      'less', 'scss', 'sass', 'styl', 'stylus',
    ];

    if (imageExtensions.includes(ext)) {
      logicalFolder = 'images';
    }

    if (videoExtensions.includes(ext)) {
      logicalFolder = 'videos';
    }

    if (audioExtensions.includes(ext)) {
      logicalFolder = 'audios';
    }

    if (documentExtensions.includes(ext)) {
      logicalFolder = 'documents';
    }

    return logicalFolder;
  }

  public async uploadFile(file: File): Promise<string> {
    logger.info('Running S3Service.uploadFile');

    try {
      if (!file) {
        throwError('File upload failed!', error.internalServer);
      }
    } catch (e: any) {
      throw new GenericResponseError(e.message, HttpStatusCode.INTERNAL_SERVER_ERROR);
    }

    const { buffer: fileBuffer, mimetype } = file;

    // Extract file extension
    const [, ext] = mimetype.split('/');

    // Get logical folder
    const logicalFolder = S3Service.getUploadLogicalFolder(ext);

    // Set S3 params
    const uploadParams = {
      Bucket: `${this.env.aws_bucket}`,
      Key: `${logicalFolder}/${uuidV4()}.${ext}`,
      Body: fileBuffer,
      ACL: 'public-read'
    };

    try {
      // Upload to S3
      await this.s3.send(new PutObjectCommand(uploadParams));

      // Return object link
      return `https://${uploadParams.Bucket}.s3.amazonaws.com/${uploadParams.Key}`;
    } catch (e: any) {
      throw new GenericResponseError(e.message, e.code || 500);
    }
  }
}
