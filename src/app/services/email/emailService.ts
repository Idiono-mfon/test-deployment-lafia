import { injectable } from 'inversify';
import nodemailer, { Transporter } from 'nodemailer';
import { GenericResponseError, HttpStatusCode, logger } from '../../utils';
import { Env } from '../../config/env';
import { IComposeEmail, IEmailService } from './interfaces';

@injectable()
export class EmailService implements IEmailService {
  private readonly transporter: Transporter;

  constructor() {
    // Test configuration with gmail service
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: Env.all().email_address,
        pass: `${Env.all().email_password}`,
      },
    });

    /**Previous Development Setup for email */
    // this.transporter = nodemailer.createTransport({
    //   pool: true,
    //   host: Env.all().email_host,
    //   port: Env.all().email_port,
    //   secure: false, // change back to true in prod // use TLS
    //   auth: {
    //     user: Env.all().email_address,
    //     pass: `${Env.all().email_password}`,
    //   },
    // });
  }

  public async sendEmail(data: IComposeEmail) {
    logger.info('Running EmailService::sendEmail');
    try {
      // verify connection configuration
      await this.transporter.verify();

      logger.info('Sending email to: ' + data.to);
      // Send the email
      return await this.transporter.sendMail({
        from: `'Lafia Team' <${Env.all().email_address}>`,
        ...data,
      });
    } catch (e: any) {
      if (typeof e.code === 'string' || !e.code) {
        e.code = HttpStatusCode.INTERNAL_SERVER_ERROR;
      }
      throw new GenericResponseError(e.message, e.code);
    }
  }

  public emailOTPMsg(otp: string) {
    return `
           <div style="font-size:10px">

                <p style="font-size:20px;"><b>Hello, Welcome on board</b> </p>
                
                <p style="font-size:15px;"> Thank for signing up for Lafia</p> 
                  
                <p style="font-size:15px">Your verification code is: <span style="font-size:20px; font-weight:bold">${otp}</span>.</p>
                
                <p style="font-size:15px">If you have any questions, send us an email to <b>support@lafia.io<b></p>
                
                <p style="font-size:15px">We’re glad you’re here!</p>
                
                <p style="font-size:15px"><strong>Lafia support</strong></p>

           </div>
        `;
  }
}
