import { Container } from 'inversify';
import 'reflect-metadata';
import { HealthController, PatientController } from '../controllers';
import { CodeSystemController } from '../controllers/codeSystems';
import {
  UserRepository,
  PatientRepository
} from '../repository';
import { CodeSystemRepository } from '../repository/codeSystems';
import {
  UserService,
  PatientService
} from '../services';
import { CodeSystemService } from '../services/codeSystems';
import { MessageBroker } from '../services/messageBroker';
import TYPES from './types';

const container = new Container();

// controllers
container
  .bind<HealthController>(TYPES.HealthController)
  .to(HealthController)
  .inSingletonScope();
container
  .bind<PatientController>(TYPES.PatientController)
  .to(PatientController)
  .inSingletonScope();
container
  .bind<CodeSystemController>(TYPES.CodeSystemController)
  .to(CodeSystemController)
  .inSingletonScope();

// services
container
  .bind<UserService>(TYPES.UserService)
  .to(UserService)
  .inSingletonScope();
container
  .bind<PatientService>(TYPES.PatientService)
  .to(PatientService)
  .inSingletonScope();
container
  .bind<CodeSystemService>(TYPES.CodeSystemService)
  .to(CodeSystemService)
  .inSingletonScope();
container
  .bind<MessageBroker>(TYPES.MessageBroker)
  .to(MessageBroker)
  .inSingletonScope();

// repositories
container
  .bind<UserRepository>(TYPES.UserRepository)
  .to(UserRepository)
  .inSingletonScope();
container
  .bind<PatientRepository>(TYPES.PatientRepository)
  .to(PatientRepository)
  .inSingletonScope();
container
  .bind<CodeSystemRepository>(TYPES.CodeSystemRepository)
  .to(CodeSystemRepository)
  .inSingletonScope();

export default container;
