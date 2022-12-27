import { ContainerModule } from 'inversify';
import TYPES from '../config/types';
import { ConnectionRepository } from './auth';
import { BaseRepository, DbAccess } from './base';
import { CodeSystemRepository } from './codeSystems';
import { IUserRepository, UserRepository } from './users';
import {
  FhirResourceRepository,
  IFhirResourceRepository,
  IImplementationGuideRepository,
  ImplementationGuideRepository,
} from './resources';
import {
  ComponentRepository,
  LabelRepository,
  LanguageRepository,
  ILabelRepository,
  ILanguageRepository,
} from './lang';
import {
  PractitionerVideoBroadcastRepository,
  TwilioRoomRepository,
  VideoBroadcastRepository,
  VideoRecordRepository,
} from './videoRecords';
import { EncounterRepository, IEncounterRepository } from './encounters';
import { ClaimRepository, IClaimRepository } from './claims';
import { CareTeamRepository, ICareTeamRepository } from './careTeams';
import { IOrganizationRepository, OrganizationRepository } from './organizations';
import {
  AppointmentResponseRepository,
  IAppointmentResponseRepository,
} from './appointmentResponses';
import { AppointmentRepository, IAppointmentRepository } from './appointments';
import { ValueSetRepository, IValueSetRepository } from './valueSets';
import { ValueSetConceptRepository, IValueSetConceptRepository } from './valueSetConcepts';

export const repositoryModule = new ContainerModule((bind) => {
  bind<DbAccess>(TYPES.BaseRepository).to(BaseRepository);
  bind<IUserRepository>(TYPES.UserRepository).to(UserRepository);
  bind<DbAccess>(TYPES.ComponentRepository).to(ComponentRepository);
  bind<ILabelRepository>(TYPES.LabelRepository).to(LabelRepository);
  bind<DbAccess>(TYPES.ConnectionRepository).to(ConnectionRepository);
  bind<DbAccess>(TYPES.CodeSystemRepository).to(CodeSystemRepository);
  bind<DbAccess>(TYPES.TwilioRoomRepository).to(TwilioRoomRepository);
  bind<DbAccess>(TYPES.VideoRecordRepository).to(VideoRecordRepository);
  bind<ILanguageRepository>(TYPES.LanguageRepository).to(LanguageRepository);
  bind<DbAccess>(TYPES.VideoBroadcastRepository).to(VideoBroadcastRepository);
  bind<IFhirResourceRepository>(TYPES.FhirResourceRepository).to(FhirResourceRepository);
  bind<IImplementationGuideRepository>(TYPES.ImplementationGuideRepository).to(
    ImplementationGuideRepository
  );
  bind<DbAccess>(TYPES.PractitionerVideoBroadcastRepository).to(
    PractitionerVideoBroadcastRepository
  );
  bind<IEncounterRepository>(TYPES.EncounterRepository).to(EncounterRepository);
  bind<IClaimRepository>(TYPES.ClaimRepository).to(ClaimRepository);
  bind<ICareTeamRepository>(TYPES.CareTeamRepository).to(CareTeamRepository);
  bind<IOrganizationRepository>(TYPES.OrganizationRepository).to(OrganizationRepository);
  bind<IAppointmentRepository>(TYPES.AppointmentRepository).to(AppointmentRepository);
  bind<IAppointmentResponseRepository>(TYPES.AppointmentResponseRepository).to(
    AppointmentResponseRepository
  );
  bind<IValueSetRepository>(TYPES.ValueSetRepository).to(ValueSetRepository);
  bind<IValueSetConceptRepository>(TYPES.ValueSetConceptRepository).to(ValueSetConceptRepository);
});
