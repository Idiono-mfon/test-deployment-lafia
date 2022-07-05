import { ContainerModule } from 'inversify';
import TYPES from '../config/types';
import { TokenUtil } from './tokenUtil';
import { UtilityService } from './utils';
import { ICsvImporter, IFhirImporter, ITokenUtil, IUtilityService } from './interfaces';
import { CsvImporter } from './csvImporter';
import { FhirImporter } from './fhirImporter';

export const utilityModule = new ContainerModule((bind) => {
  bind<ITokenUtil>(TYPES.TokenUtil).to(TokenUtil);
  bind<IUtilityService>(TYPES.UtilityService).to(UtilityService);
  bind<ICsvImporter>(TYPES.CsvImporter).to(CsvImporter);
  bind<IFhirImporter>(TYPES.FhirImporter).to(FhirImporter);
});
