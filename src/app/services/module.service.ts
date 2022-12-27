import { ContainerModule } from 'inversify';
import TYPES from '../config/types';
import { IFhirServer } from '../models';
import { IS3Service, S3Service } from './aws';
import { FhirServerService } from './fhirServer';
import { AuthService, IAuthService } from './auth';
import { FileService, IFileService } from './file';
import { IUserService, UserService } from './users';
import { EmailService, IEmailService } from './email';
import { ITwilioService, TwilioService } from './twilio';
import { ILanguageService, LanguageService } from './lang';
import { IPatientService, PatientService } from './patients';
import { FirebaseService, IFirebaseService } from './notifications';
import { ILafiaMediaService, LafiaMediaService } from './mediaServer';
import { CodeSystemService, ICodeSystemService } from './codeSystems';
import { IPractitionerService, PractitionerService } from './practitioners';
import {
  IRedisStore,
  ISignallingServerService,
  RedisStore,
  SignallingServerService,
} from './signallingServers';
import {
  FhirResourceService,
  ImplementationGuideService,
  IFhirResourceService,
  IImplementationGuideService,
} from './resources';
import {
  ITwilioRoomService,
  IVideoBroadcastService,
  IVideoRecordService,
  TwilioRoomService,
  VideoBroadcastService,
  VideoRecordService,
} from './videoRecords';
import { IRabbitMqService, IRabbitMqSetup, RabbitMqService, RabbitMqSetup } from './messageBroker';
import { EncounterService, IEncounterService } from './encounters';
import { ClaimService, IClaimService } from './claims';
import { AppointmentService, IAppointmentService } from './appointments';
import { AppointmentResponseService, IAppointmentResponseService } from './appointmentResponses';
import { CareTeamService, ICareTeamService } from './careTeams';
import { IOrganizationService, OrganizationService } from './organizations';
import { ValueSetConceptService, IValueSetConceptService } from './valueSetConcepts';
import { ValueSetService, IValueSetService } from './valueSets';

export const serviceModule = new ContainerModule((bind) => {
  bind<IS3Service>(TYPES.S3Service).to(S3Service);
  bind<IRedisStore>(TYPES.RedisStore).to(RedisStore);
  bind<IAuthService>(TYPES.AuthService).to(AuthService);
  bind<IFileService>(TYPES.FileService).to(FileService);
  bind<IUserService>(TYPES.UserService).to(UserService);
  bind<IEmailService>(TYPES.EmailService).to(EmailService);
  bind<IRabbitMqSetup>(TYPES.RabbitMqSetup).to(RabbitMqSetup);
  bind<ITwilioService>(TYPES.TwilioService).to(TwilioService);
  bind<IPatientService>(TYPES.PatientService).to(PatientService);
  bind<IFhirServer>(TYPES.FhirServerService).to(FhirServerService);
  bind<IRabbitMqService>(TYPES.RabbitMqService).to(RabbitMqService);
  bind<IFirebaseService>(TYPES.FirebaseService).to(FirebaseService);
  bind<ILanguageService>(TYPES.LanguageService).to(LanguageService);
  bind<ICodeSystemService>(TYPES.CodeSystemService).to(CodeSystemService);
  bind<ITwilioRoomService>(TYPES.TwilioRoomService).to(TwilioRoomService);
  bind<ILafiaMediaService>(TYPES.LafiaMediaService).to(LafiaMediaService);
  bind<IVideoRecordService>(TYPES.VideoRecordService).to(VideoRecordService);
  bind<IFhirResourceService>(TYPES.FhirResourceService).to(FhirResourceService);
  bind<IPractitionerService>(TYPES.PractitionerService).to(PractitionerService);
  bind<IVideoBroadcastService>(TYPES.VideoBroadcastService).to(VideoBroadcastService);
  bind<ISignallingServerService>(TYPES.SignallingServerService).to(SignallingServerService);
  bind<IImplementationGuideService>(TYPES.ImplementationGuideService).to(
    ImplementationGuideService
  );
  bind<IEncounterService>(TYPES.EncounterService).to(EncounterService);
  bind<IClaimService>(TYPES.ClaimService).to(ClaimService);
  bind<IAppointmentService>(TYPES.AppointmentService).to(AppointmentService);
  bind<IAppointmentResponseService>(TYPES.AppointmentResponseService).to(
    AppointmentResponseService
  );
  bind<ICareTeamService>(TYPES.CareTeamService).to(CareTeamService);
  bind<IOrganizationService>(TYPES.OrganizationService).to(OrganizationService);
  bind<IValueSetService>(TYPES.ValueSetService).to(ValueSetService);
  bind<IValueSetConceptService>(TYPES.ValueSetConceptService).to(ValueSetConceptService);
});
