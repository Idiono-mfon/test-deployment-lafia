import { ContainerModule } from 'inversify';
import TYPES from '../config/types';
import { TokenUtil } from './tokenUtil';
import { UtilityService } from './utils';
import { ITokenUtil, IUtilityService } from './interfaces';

export const utilityModule = new ContainerModule((bind) => {
  bind<ITokenUtil>(TYPES.TokenUtil).to(TokenUtil);
  bind<IUtilityService>(TYPES.UtilityService).to(UtilityService);
});
