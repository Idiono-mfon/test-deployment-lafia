import { injectable } from 'inversify';
import nodemailer, { Transporter } from 'nodemailer';
import { GenericResponseError, HttpStatusCode, logger } from '../../utils';
import { Env } from '../../config/env';
import { IEmailService } from './interfaces';

const env = Env.all();

const transporter: Transporter = nodemailer.createTransport({
  pool: true,
  host: 'mail.lafia.io',
  port: 465,
  secure: true, // use TLS
  auth: {
    user: env.email_address,
    pass: `${env.email_password}`,
  }
});

@injectable()
export class EmailService implements IEmailService {
  public async sendEmail(data: IComposeEmail) {
    logger.info('Running EmailService::sendEmail')
    try {
      // verify connection configuration
      await transporter.verify();

      logger.info('Sending email to: ' + data.to);
      // Send the email
      return await transporter.sendMail({
        from: `'Lafia Team' <${env.email_address}>`,
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

export interface IComposeEmail {
  to: string;
  from?: string;
  subject: string;
  html: string;
  text?: string;
}
