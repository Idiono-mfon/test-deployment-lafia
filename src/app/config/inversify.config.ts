import { Container } from 'inversify';
import 'reflect-metadata';
import {
  AuthController,
  HealthController,
  PatientController,
  PractitionerController
} from '../controllers';
import { CodeSystemController } from '../controllers/codeSystems';
import {
  UserRepository,
  PatientRepository,
  PractitionerRepository
} from '../repository';
import { CodeSystemRepository } from '../repository/codeSystems';
import {
  UserService,
  PatientService,
  PractitionerService,
  S3Service, AuthService
} from '../services';
import { CodeSystemService } from '../services/codeSystems';
import { MessageBroker } from '../services/messageBroker';
import { PlatformSdkService } from '../services/platformSDK';
import { UtilityService } from '../utils';
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
  .bind<PractitionerController>(TYPES.PractitionerController)
  .to(PractitionerController)
  .inSingletonScope();
container
  .bind<CodeSystemController>(TYPES.CodeSystemController)
  .to(CodeSystemController)
  .inSingletonScope();
container
  .bind<AuthController>(TYPES.AuthController)
  .to(AuthController)
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
  .bind<PractitionerService>(TYPES.PractitionerService)
  .to(PractitionerService)
  .inSingletonScope();
container
  .bind<CodeSystemService>(TYPES.CodeSystemService)
  .to(CodeSystemService)
  .inSingletonScope();
container
  .bind<MessageBroker>(TYPES.MessageBroker)
  .to(MessageBroker)
  .inSingletonScope();
container
  .bind<S3Service>(TYPES.S3Service)
  .to(S3Service)
  .inSingletonScope();
container
  .bind<UtilityService>(TYPES.UtilityService)
  .to(UtilityService)
  .inSingletonScope();
container
  .bind<PlatformSdkService>(TYPES.PlatformSdkService)
  .to(PlatformSdkService)
  .inSingletonScope();
container
  .bind<AuthService>(TYPES.AuthService)
  .to(AuthService)
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
  .bind<PractitionerRepository>(TYPES.PractitionerRepository)
  .to(PractitionerRepository)
  .inSingletonScope();
container
  .bind<CodeSystemRepository>(TYPES.CodeSystemRepository)
  .to(CodeSystemRepository)
  .inSingletonScope();

export default container;
