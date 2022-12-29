import { ContainerModule } from 'inversify';
import TYPES from '../config/types';
import { AuthController } from './auth';
import { UserController } from './users';
import { HealthController } from './health';
import { ConsentController } from './consents';
import { PatientController } from './patients';
import { FhirServerController } from './fhirServer';
import { CodeSystemController } from './codeSystems';
import { PractitionerController } from './practitioners';
import { LafiaMediaController, LafiaVideoController } from './mediaServer';
import { ComponentController, LabelController, LanguageController } from './lang';
import { FhirResourceController, ImplementationGuideController } from './resources';
import { ValueSetController } from './valueSets';
import { AgreementController } from './agreements';

export const controllerModule = new ContainerModule((bind) => {
  bind<AuthController>(TYPES.AuthController).to(AuthController);
  bind<UserController>(TYPES.UserController).to(UserController);
  bind<LabelController>(TYPES.LabelController).to(LabelController);
  bind<HealthController>(TYPES.HealthController).to(HealthController);
  bind<PatientController>(TYPES.PatientController).to(PatientController);
  bind<ConsentController>(TYPES.ConsentController).to(ConsentController);
  bind<LanguageController>(TYPES.LanguageController).to(LanguageController);
  bind<ComponentController>(TYPES.ComponentController).to(ComponentController);
  bind<LafiaVideoController>(TYPES.LafiaVideoController).to(LafiaVideoController);
  bind<LafiaMediaController>(TYPES.LafiaMediaController).to(LafiaMediaController);
  bind<CodeSystemController>(TYPES.CodeSystemController).to(CodeSystemController);
  bind<FhirServerController>(TYPES.FhirServerController).to(FhirServerController);
  bind<PractitionerController>(TYPES.PractitionerController).to(PractitionerController);
  bind<FhirResourceController>(TYPES.FhirResourceController).to(FhirResourceController);
  bind<ImplementationGuideController>(TYPES.ImplementationGuideController).to(
    ImplementationGuideController
  );
  bind<FhirResourceController>(TYPES.FhirResourceController).to(FhirResourceController);
  bind<ValueSetController>(TYPES.ValueSetController).to(ValueSetController);
  bind<AgreementController>(TYPES.AgreementController).to(AgreementController);
});
