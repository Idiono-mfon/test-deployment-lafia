import { injectable } from 'inversify';
import { IComposeEmail, IEmailService } from '../../../app/services';

@injectable()
export class TestEmailService implements IEmailService {
  public async sendEmail(data: IComposeEmail) {
    // Sending email...
  }
  public emailOTPMsg(data: string) {
    // Sending email...
    return `Test Email message. Code ${data} `;
  }
}
