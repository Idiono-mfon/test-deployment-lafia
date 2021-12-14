import { ContainerModule } from 'inversify';
import TYPES from '../config/types';
import { AuthMiddleware } from './auth';

export const middlewareModule = new ContainerModule((bind) => {
  bind<AuthMiddleware>(TYPES.AuthMiddleware).to(AuthMiddleware);
});
