import { Container } from 'inversify';
import 'reflect-metadata';
import { HealthController } from '../controllers';
import { UserRepository } from '../repository';
import { UserService } from '../services';
import TYPES from './types';

const container = new Container();

// controllers
container
  .bind<HealthController>(TYPES.HealthController)
  .to(HealthController)
  .inSingletonScope();

// services
container
  .bind<UserService>(TYPES.UserService)
  .to(UserService)
  .inSingletonScope();

// repositories
container
  .bind<UserRepository>(TYPES.UserRepository)
  .to(UserRepository)
  .inSingletonScope();

export default container;
