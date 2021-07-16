import { Container } from 'inversify';
import 'reflect-metadata';
import {
  AuthController,
  HealthController,
  PatientController,
  FhirServerController,
  CodeSystemController,
  PractitionerController,
} from '../controllers';
import {
  ComponentController,
  LabelController,
  LanguageController
} from '../controllers/lang';
import { AuthMiddleware } from '../middlewares';
import {
  UserRepository,
  PatientRepository,
  CodeSystemRepository,
  PractitionerRepository
} from '../repository';
import {
  LabelRepository,
  LanguageRepository,
  ComponentRepository,
} from '../repository/lang';
import {
  UserService,
  EmailService,
  MessageBroker,
  TwilioService,
  PatientService,
  LanguageService,
  CodeSystemService,
  FhirServerService,
  PlatformSdkService,
  PractitionerService,
  S3Service, AuthService,
} from '../services';
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
container
  .bind<LabelController>(TYPES.LabelController)
  .to(LabelController)
  .inSingletonScope();
container
  .bind<ComponentController>(TYPES.ComponentController)
  .to(ComponentController)
  .inSingletonScope();
container
  .bind<LanguageController>(TYPES.LanguageController)
  .to(LanguageController)
  .inSingletonScope();
container
  .bind<FhirServerController>(TYPES.FhirServerController)
  .to(FhirServerController)
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
container
  .bind<EmailService>(TYPES.EmailService)
  .to(EmailService)
  .inSingletonScope();
container
  .bind<LanguageService>(TYPES.LanguageService)
  .to(LanguageService)
  .inSingletonScope();
container
  .bind<FhirServerService>(TYPES.FhirServerService)
  .to(FhirServerService)
  .inSingletonScope()
container
  .bind<TwilioService>(TYPES.TwilioService)
  .to(TwilioService)
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
container
  .bind<LabelRepository>(TYPES.LabelRepository)
  .to(LabelRepository)
  .inSingletonScope();
container
  .bind<ComponentRepository>(TYPES.ComponentRepository)
  .to(ComponentRepository)
  .inSingletonScope();
container
  .bind<LanguageRepository>(TYPES.LanguageRepository)
  .to(LanguageRepository)
  .inSingletonScope();

// middleware
container
  .bind<AuthMiddleware>(TYPES.AuthMiddleware)
  .to(AuthMiddleware)
  .inSingletonScope();

export default container;
