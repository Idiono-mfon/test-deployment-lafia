import { injectable } from 'inversify';
import _ from 'lodash';
import { IFindUser, IUser } from '../../../app/models';

@injectable()
export class TestUserRepository {
  private userData: IUser[] = [
    {
      id: 'e59d4aee-3f4e-461a-9057-ba4677d9b057',
      resource_type: 'patient',
      resource_id: '11',
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
      resource_id: '22',
      resourceId: '22',
      email: 'joy@test.com',
      password: 'LKamd.4h&',
      first_name: 'joy',
      last_name: 'test',
      gender: 'female',
      password_reset_token: '',
      token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpveUB0ZXN0LmNvbSIsImlhdCI6MTYzOTQzMTkxOSwiYXVkIjoiZTQ1NjQzMmItODMzNS00YTA3LWExYTUtMzRmODYwZTJmMzNmIn0.RODj4OzgVPibzheJS2XdD6G3T6XXgEvwtaUfQhh5tYY',
      phone: '07065182394',
      photo: '',
      provider: 'lafia',
      has_verified_phone: true,
      has_verified_email: false,
      created_at: new Date('2019-01-01T00:00:00.000Z'),
      updated_at: new Date('2019-01-01T00:00:00.000Z'),
    }
  ]

  public async createUser(user: IUser): Promise<IUser> {
    user.created_at = new Date();
    user.updated_at = new Date();

    this.userData.push(user);

    return Promise.resolve(user);
  }

  public async getOneUser(data: IFindUser | any): Promise<IUser> {
    const user = this.userData.filter(user => {
      let isMatch = false;
      // eslint-disable-next-line @typescript-eslint/no-for-in-array
      for (const key of Object.keys(data)) {
        // @ts-ignore
        isMatch = user[key] === data[key];
      }

      if (isMatch) {
        return user;
      }

      return null;
    });

    return Promise.resolve(user[0]);
  }

  public async getOneBy(field: string, value: string): Promise<IUser> {

    return await this.getOneUser({ [field]: value });
  }

  public async getUserByEmailOrPhone(value: string): Promise<IUser> {
    // @ts-ignore
    const user = this.userData.filter(user => {
      if (user.email === value || user.phone === value) {
        return user;
      }

      return null;
    });

    return Promise.resolve(user[0]);
  }

  public async updateUser(id: string, data: IFindUser): Promise<IUser> {
    const user = this.userData.filter(user => {
      if (user.id === id || user.resource_id === id) {
        return user;
      }

      return null;
    });

    if (user[0]) _.remove(this.userData, user[0]);

    const updatedUser = { ...user[0], ...data };

    this.userData.push(updatedUser);

    return Promise.resolve(updatedUser);
  }

  public async userLogout(id: string): Promise<IUser> {
    return await this.updateUser(id, { token: '' });
  }
}
