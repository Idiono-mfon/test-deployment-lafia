import { inject, injectable } from 'inversify';
import TYPES from '../config/types';
import { refreshOauth2Token } from '../index';
import { AuthService } from '../services';

@injectable()
export class TokenUtil {
  @inject(TYPES.AuthService)
  private readonly authService: AuthService;

  public isTokenExpired(token: string): boolean {
    return (Date.now() >= JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString()).exp * 1000)
  }

  public async refresh(refreshToken: string, provider: string = 'oauth2') {
    const existingConnection = await this.authService.getConnectionByFields({ refresh_token: refreshToken });

    return new Promise<{ access_token: string }>((resolve, reject) => {
      if (!existingConnection) {
        return reject('Invalid refresh token provided');
      }

      refreshOauth2Token.requestNewAccessToken(
        provider,
        refreshToken,
        async (err: any, accessToken: string, refreshToken: string, result: any) => {

          if (err) {
            return reject(err);
          }


          // You have a new access token, store it in the user object,
          // or use it to make a new request.
          // `refreshToken` may or may not exist, depending on the strategy you are using.
          // You probably don't need it anyway, as according to the OAuth 2.0 spec,
          // it should be the same as the initial refresh token.
          const { access_token, refresh_token } = result;
          await this.authService.updateConnection({
            ...existingConnection,
            access_token,
            refresh_token
          });

          return resolve({ access_token });
        },
      );
    });
  }
}
