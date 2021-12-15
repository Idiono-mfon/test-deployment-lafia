import { ContainerModule } from 'inversify';
import TYPES from '../config/types';
import { ConnectionRepository } from './auth';
import { BaseRepository, DbAccess } from './base';
import { CodeSystemRepository } from './codeSystems';
import { ComponentRepository, LabelRepository, LanguageRepository } from './lang';
import { PatientRepository } from './patients';
import { PractitionerRepository } from './practitioners';
import { FhirResourceRepository, ImplementationGuideRepository } from './resources';
import { IUserRepository, UserRepository } from './users';
import {
  PractitionerVideoBroadcastRepository,
  TwilioRoomRepository,
  VideoBroadcastRepository,
  VideoRecordRepository
} from './videoRecords';

export const repositoryModule = new ContainerModule((bind) => {
  bind<ConnectionRepository>(TYPES.ConnectionRepository).to(ConnectionRepository);
  bind<DbAccess>(TYPES.CodeSystemRepository).to(CodeSystemRepository);
  bind<ComponentRepository>(TYPES.ComponentRepository).to(ComponentRepository);
  bind<LabelRepository>(TYPES.LabelRepository).to(LabelRepository);
  bind<LanguageRepository>(TYPES.LanguageRepository).to(LanguageRepository);
  bind<PatientRepository>(TYPES.PatientRepository).to(PatientRepository);
  bind<PractitionerRepository>(TYPES.PractitionerRepository).to(PractitionerRepository);
  bind<FhirResourceRepository>(TYPES.FhirResourceRepository).to(FhirResourceRepository);
  bind<ImplementationGuideRepository>(TYPES.ImplementationGuideRepository).to(ImplementationGuideRepository);
  bind<IUserRepository>(TYPES.UserRepository).to(UserRepository);
  bind<PractitionerVideoBroadcastRepository>(TYPES.PractitionerVideoBroadcastRepository).to(PractitionerVideoBroadcastRepository);
  bind<DbAccess>(TYPES.TwilioRoomRepository).to(TwilioRoomRepository);
  bind<VideoBroadcastRepository>(TYPES.VideoBroadcastRepository).to(VideoBroadcastRepository);
  bind<VideoRecordRepository>(TYPES.VideoRecordRepository).to(VideoRecordRepository);
  bind<DbAccess>(TYPES.BaseRepository).to(BaseRepository);
});
