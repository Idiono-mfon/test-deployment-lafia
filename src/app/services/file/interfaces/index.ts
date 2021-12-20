export interface IFileService {
  transferFileToLafiaS3Bucket(fileUrl: string): Promise<string>;

  deleteLocalFile(path: string): Promise<void>;

  onLocalFileDelete(): void;
}
