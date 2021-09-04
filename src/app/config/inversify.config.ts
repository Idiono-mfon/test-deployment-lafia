import { Container } from 'inversify';
import {
  AuthController,
  LabelController,
  HealthController,
  PatientController,
  ConsentController,
  LanguageController,
  ComponentController,
  FhirServerController,
  CodeSystemController,
  LafiaMediaController,
  PractitionerController,
} from '../controllers';
import { AuthMiddleware } from '../middlewares';
import {
  UserRepository,
  LabelRepository,
  PatientRepository,
  LanguageRepository,
  ComponentRepository,
  CodeSystemRepository,
  VideoRecordRepository,
  PractitionerRepository,
  VideoBroadcastRepository,
  PractitionerVideoBroadcastRepository,
} from '../repository';
import { TwilioRoomRepository } from '../repository/videoRecords/twilioRoomRepository';
import {
  S3Service,
  UserService,
  AuthService,
  EmailService,
  MessageBroker,
  TwilioService,
  ConsentService,
  PatientService,
  LanguageService,
  CodeSystemService,
  FhirServerService,
  LafiaMediaService,
  PlatformSdkService,
  VideoRecordService,
  PractitionerService,
  VideoBroadcastService,
} from '../services';
import { TwilioRoomService } from '../services/videoRecords/twilioRoomService';
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
container
  .bind<LafiaMediaController>(TYPES.LafiaMediaController)
  .to(LafiaMediaController)
  .inSingletonScope();
container
  .bind<ConsentController>(TYPES.ConsentController)
  .to(ConsentController)
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
container
  .bind<VideoRecordService>(TYPES.VideoRecordService)
  .to(VideoRecordService)
  .inSingletonScope();
container
  .bind<LafiaMediaService>(TYPES.LafiaMediaService)
  .to(LafiaMediaService)
  .inSingletonScope();
container
  .bind<ConsentService>(TYPES.ConsentService)
  .to(ConsentService)
  .inSingletonScope();
container
  .bind<VideoBroadcastService>(TYPES.VideoBroadcastService)
  .to(VideoBroadcastService)
  .inSingletonScope();
container
  .bind<TwilioRoomService>(TYPES.TwilioRoomService)
  .to(TwilioRoomService)
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
container
  .bind<VideoRecordRepository>(TYPES.VideoRecordRepository)
  .to(VideoRecordRepository)
  .inSingletonScope();
container
  .bind<VideoBroadcastRepository>(TYPES.VideoBroadcastRepository)
  .to(VideoBroadcastRepository)
  .inSingletonScope();
container
  .bind<PractitionerVideoBroadcastRepository>(TYPES.PractitionerVideoBroadcastRepository)
  .to(PractitionerVideoBroadcastRepository)
  .inSingletonScope();
container
  .bind<TwilioRoomRepository>(TYPES.TwilioRoomRepository)
  .to(TwilioRoomRepository)
  .inSingletonScope();

// middleware
container
  .bind<AuthMiddleware>(TYPES.AuthMiddleware)
  .to(AuthMiddleware)
  .inSingletonScope();

export default container;
