import { injectable } from 'inversify';
import nodemailer, { Transporter } from 'nodemailer';
import { GenericResponseError, HttpStatusCode, logger } from '../../utils';
import { Env } from '../../config/env';
import { IComposeEmail, IEmailService } from './interfaces';

@injectable()
export class EmailService implements IEmailService {
  private readonly transporter: Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      pool: true,
      host: 'mail.lafia.io',
      port: 465,
      secure: true, // use TLS
      auth: {
        user: Env.all().email_address,
        pass: `${Env.all().email_password}`,
      }
    });
  }

  public async sendEmail(data: IComposeEmail) {
    logger.info('Running EmailService::sendEmail')
    try {
      // verify connection configuration
      await this.transporter.verify();

      logger.info('Sending email to: ' + data.to);
      // Send the email
      return await this.transporter.sendMail({
        from: `'Lafia Team' <${Env.all().email_address}>`,
        ...data
      });
    } catch (e: any) {
      if (typeof e.code === 'string' || !e.code) {
        e.code = HttpStatusCode.INTERNAL_SERVER_ERROR
      }
      throw new GenericResponseError(e.message, e.code);
    }
  }
}
