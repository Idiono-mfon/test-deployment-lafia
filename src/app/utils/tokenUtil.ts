import { inject, injectable } from 'inversify';
import { refreshOauth2Token } from '../app';
import TYPES from '../config/types';
import { AuthService } from '../services';
import { logger } from './loggerUtil';

@injectable()
export class TokenUtil {
  @inject(TYPES.AuthService)
  private readonly authService: AuthService;

  public isTokenExpired(token: string): boolean {
    logger.info('Running TokenUtil.isTokenExpired');

    if (!token) {
      return false;
    }

    return (Date.now() >= JSON.parse(Buffer.from(token?.split('.')[1], 'base64').toString()).exp * 1000);
  }

  public async refreshAccessToken(token: string, provider: string = 'oauth2') {
    logger.info('Running TokenUtil.refreshAccessToken');

    const isTokenExpired = this.isTokenExpired(token);

    if (!isTokenExpired) {
      return { access_token: null, is_refresh_token_expired: false };
    }

    const existingConnection = await this.authService.getConnectionByFields({ access_token: token });

    return new Promise<{ access_token: string | null, is_refresh_token_expired: boolean }>((resolve, reject) => {
      if (!existingConnection) {
        return reject({
          message: 'There is no existing connection with the provided access token',
          code: 403
        });
      }

      const { refreshToken } = existingConnection;
      let is_refresh_token_expired = false;

      refreshOauth2Token.requestNewAccessToken(
        provider,
        refreshToken!,
        async (err: any, accessToken: string, refreshToken: string, result: any) => {

          if (err) {
            logger.warn('Refresh token expired');
            is_refresh_token_expired = true;

            // Remove the connection as it has expired
            await this.authService.deleteConnection(existingConnection?.id!);

            return resolve({ access_token: null, is_refresh_token_expired });
          }


          // You have a new access token, store it in the user object,
          // or use it to make a new request.
          // `refreshToken` may or may not exist, depending on the strategy you are using.
          // You probably don't need it anyway, as according to the OAuth 2.0 spec,
          // it should be the same as the initial refreshAccessToken token.
          const { access_token, refresh_token } = result;
          await this.authService.updateConnection({
            ...existingConnection,
            access_token,
            refresh_token
          });

          return resolve({ access_token, is_refresh_token_expired });
        },
      );
    });
  }
}
