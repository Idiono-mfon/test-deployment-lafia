import { injectable } from 'inversify';
import nodemailer, { Transporter } from 'nodemailer';
import { GenericResponseError, HttpStatusCode } from '../../utils';
import { Env } from '../../config/env';

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
export class EmailService {
  public async sendEmail(data: IComposeEmail) {
    try {
      // verify connection configuration
      await transporter.verify();

      // Send the email
      return await transporter.sendMail({
        from: `'Lafia Team' <${env.email_address}>`,
        ...data
      });
    } catch (e) {
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
