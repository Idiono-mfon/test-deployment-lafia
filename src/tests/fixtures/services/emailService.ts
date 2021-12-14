import { injectable } from 'inversify';
import { IComposeEmail } from '../../../app/services';

@injectable()
export class TestEmailService {
  public async sendEmail(data: IComposeEmail) {
    // Sending email...
  }
}
