import { injectable } from 'inversify';
import { IComposeEmail } from '../../../app/services';

@injectable()
export class EmailService {
  public async sendEmail(data: IComposeEmail) {
    // Sending email...
  }
}
