import { ContainerModule } from 'inversify';
import TYPES from '../config/types';
import { AuthMiddleware } from './auth';
import { IAuthMiddleware } from './interfaces';

export const middlewareModule = new ContainerModule((bind) => {
  bind<IAuthMiddleware>(TYPES.AuthMiddleware).to(AuthMiddleware);
});
