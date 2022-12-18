export interface IEmailService {
  sendEmail(data: IComposeEmail): Promise<any>;
  emailOTPMsg(data: string): string;
}

export interface IComposeEmail {
  to: string;
  from?: string;
  subject: string;
  html: string;
  text?: string;
}
