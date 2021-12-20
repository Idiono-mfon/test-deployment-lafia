import { Model } from 'objection';
import { UserModel } from '../../../../app/models';
import { BaseModel } from '../../../../app/models/base';

describe('User Model Unit Test', () => {

  it('should be defined', () => {
    expect(UserModel).toBeDefined();
  });

  it('should be a BaseModel', () => {
    expect(UserModel.prototype).toBeInstanceOf(BaseModel);
  });

  it('should be a Model', () => {
    expect(UserModel.prototype).toBeInstanceOf(Model);
  });

  it('should have a tableName', () => {
    expect(UserModel.tableName).toBe('lafia-service.users');
  });

  it('should have a jsonSchema', () => {
    expect(UserModel.jsonSchema).toBeDefined();
    expect(UserModel.jsonSchema).toEqual({
      type: 'object',
      required: ['email'],
      title: 'User Schema Validation',
      properties: {
        email: { type: 'string' },
        phone: { type: 'string', minLength: 11 },
        photo: { type: 'string' },
        provider: { type: 'string' },
        first_name: { type: 'string' },
        last_name: { type: 'string' },
        gender: { type: 'string' },
        password: { type: 'string' },
        password_reset_token: { type: 'string' },
        token: { type: 'string' },
        resource_type: { type: 'string' },
        resource_id: { type: 'string' },
      }
    });
  });
});
