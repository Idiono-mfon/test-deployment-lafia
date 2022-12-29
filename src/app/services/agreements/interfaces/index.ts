import { IAgreement, ICreateAgreementDto } from '../../../models';

export interface IAgreementService {
  findOne(query: IAgreement): Promise<IAgreement>;

  findById(data: string): Promise<IAgreement>;

  create(data: ICreateAgreementDto): Promise<IAgreement>;

  exists(query: IAgreement): Promise<boolean>;

  getAgreementByName(name: string): Promise<IAgreement>;

  update(id: string, data: IAgreement): Promise<IAgreement>;
}
