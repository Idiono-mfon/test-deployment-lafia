import { ICareTeam, IFhirCareTeam } from '../../../models';

export interface ICareTeamService {
//   findById(id: string): Promise<IFhirCareTeam>;

//   update(id: string, data: ICareTeam): Promise<IFhirCareTeam>;

  create(data: ICareTeam): Promise<ICareTeam>;
  createFromERPNext(data: ICareTeam): Promise<ICareTeam>;
}
