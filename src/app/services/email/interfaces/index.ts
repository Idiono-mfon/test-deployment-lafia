export interface IEmailService {
  sendEmail(data: IComposeEmail): Promise<any>;
}

export interface IComposeEmail {
  to: string;
  from?: string;
  subject: string;
  html: string;
  text?: string;
}
