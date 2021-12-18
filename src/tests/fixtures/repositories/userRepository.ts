import { injectable } from 'inversify';
import { IFindUser, IUser } from '../../../app/models';
import { IUserRepository } from '../../../app/repository';
import { TestBaseRepository } from './baseRepository';


const userData: IUser[] = [
  {
    id: 'e59d4aee-3f4e-461a-9057-ba4677d9b057',
    resource_type: 'patient',
    resourceType: 'patient',
    resource_id: '11',
    resourceId: '11',
    email: 'david@test.com',
    password: '13Jmsl*2#',
    first_name: 'david',
    last_name: 'test',
    gender: 'male',
    password_reset_token: '',
    token: '',
    phone: '09082315532',
    photo: '',
    provider: 'lafia',
    has_verified_phone: false,
    has_verified_email: false,
    created_at: new Date('2018-02-01T00:00:00.000Z'),
    updated_at: new Date('2018-02-01T00:00:00.000Z'),
  },
  {
    id: 'e456432b-8335-4a07-a1a5-34f860e2f33f',
    resource_type: 'practitioner',
    resourceType: 'practitioner',
    resource_id: '22',
    resourceId: '22',
    email: 'joy@test.com',
    password: 'LKamd.4h&',
    first_name: 'joy',
    last_name: 'test',
    gender: 'female',
    password_reset_token: '',
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpveUB0ZXN0LmNvbSIsImlhdCI6MTYzOTcxMjQwNiwiYXVkIjoiMjIifQ.4jZ7c8smeGOUFgS-Sc2Kh6P9_AXAooi7a_vtPrge8KQ',
    phone: '07065182394',
    photo: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200&d=mm&r=g',
    provider: 'lafia',
    has_verified_phone: true,
    has_verified_email: false,
    created_at: new Date('2019-01-01T00:00:00.000Z'),
    updated_at: new Date('2019-01-01T00:00:00.000Z'),
  }
];

@injectable()
export class TestUserRepository extends TestBaseRepository implements IUserRepository {
  constructor() {
    super(userData);
  }

  public async getUserByEmailOrPhone(value: string): Promise<IUser> {
    // @ts-ignore
    const user = userData.filter(user => {
      if (user.email === value || user.phone === value) {
        return user;
      }

      return null;
    });

    return Promise.resolve(user[0]);
  }

  public async logout(id: string): Promise<IUser> {
    const loggedOutUser = await this.update<IFindUser>(id, { token: '' });

    return loggedOutUser as IUser;
  }
}
