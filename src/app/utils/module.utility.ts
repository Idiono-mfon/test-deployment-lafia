import { ContainerModule } from 'inversify';
import TYPES from '../config/types';
import { TokenUtil } from './tokenUtil';
import { UtilityService } from './utils';

export const utilityModule = new ContainerModule((bind) => {
  bind<TokenUtil>(TYPES.TokenUtil).to(TokenUtil);
  bind<UtilityService>(TYPES.UtilityService).to(UtilityService);
});
