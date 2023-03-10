import fs from 'fs';
import * as Path from 'path';
import * as stream from 'stream';
import { promisify } from 'util';
import { v4 as uuid } from 'uuid';
import Axios, { AxiosResponse } from 'axios';
import { inject, injectable } from 'inversify';
import { IS3Service } from '../aws';
import TYPES from '../../config/types';
import { IFileService } from './interfaces';
import { eventName, eventService } from '../eventEmitter';
import { InternalServerError, logger } from '../../utils';

@injectable()
export class FileService implements IFileService {
  @inject(TYPES.S3Service)
  private readonly s3: IS3Service;

  private finished = promisify(stream.finished);

  private async downloadFile(fileUrl: string, path: string): Promise<any> {
    logger.info('Running FileService.downloadFile');

    const writer = fs.createWriteStream(path);

    let response: AxiosResponse;

    try {
      response = await Axios({
        method: 'get',
        url: fileUrl,
        responseType: 'stream',
      });
    } catch (e: any) {
      logger.error('Error downloading encounter file with axios: ' + e.message);
      throw new InternalServerError('Error downloading encounter file with axios: ' + e.message);
    }

    response.data.pipe(writer);

    return this.finished(writer).then(() => {
      logger.info('Finished downloading file');
    });
  }

  public async transferFileToLafiaS3Bucket(fileUrl: string): Promise<string> {
    logger.info('Running FileService.transferFileToLafiaS3Bucket');

    const path = Path.resolve(__dirname, `${uuid()}.mp4`);

    try {
      await this.downloadFile(fileUrl, path);
    } catch (e: any) {
      logger.error('Error downloading file from Twilio: ', e);
      throw new InternalServerError(e.message);
    }

    const options = {
      buffer: fs.createReadStream(path),
      mimetype: 'video/mp4',
    }

    // Upload to S3 bucket
    const s3FileUrl = await this.s3.uploadFile(options);

    // Raise event to delete local file
    eventService.emit(eventName.removeLocalFile, path);

    return s3FileUrl;

  }

  public async deleteLocalFile(path: string): Promise<void> {
    logger.info('Running FileService.deleteLocalFile');

    fs.unlink(path, (err: any) => {
      if (err) {
        logger.error('Error deleting local file: ', err);
        throw new InternalServerError('Error deleting local file: ' + err.message);
      }
    });
  }

  public onLocalFileDelete(): void {
    eventService.on(eventName.removeLocalFile, (path) => this.deleteLocalFile(path));
  }
}
