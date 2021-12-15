import { IComposeEmail } from '../emailService';

export interface IEmailService {
  sendEmail(data: IComposeEmail): Promise<any>;
}
