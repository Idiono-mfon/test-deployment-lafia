import { VideoGrant } from 'twilio/lib/jwt/AccessToken';

export class TwilioMock {
  private accountSid: string;
  private authToken: string;

  public identity: string = '';
  public static jwt = {
    AccessToken: {
      VideoGrant: class VideoGrant {
        private room: string = '';

        constructor(room: string) {
          this.room = room;
        }
      }
    },
  }

  constructor(accountSid: string, authToken: string) {
    this.authToken = authToken;
    this.accountSid = accountSid;
  }

  public addGrant(grant: VideoGrant) {
    return grant;
  }
}
