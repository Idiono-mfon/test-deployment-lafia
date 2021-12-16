import { Model } from 'objection';
import { CodeSystemModel } from '../../../../app/models';
import { BaseModel } from '../../../../app/models/base';

describe('User Model Unit Test', () => {
  it('should be defined', () => {
    expect(CodeSystemModel).toBeDefined();
  });

  it('should be a BaseModel', () => {
    expect(CodeSystemModel.prototype).toBeInstanceOf(BaseModel);
  });

  it('should be a Model', () => {
    expect(CodeSystemModel.prototype).toBeInstanceOf(Model);
  });

  it('should have a tableName', () => {
    expect(CodeSystemModel.tableName).toBe('lafia-service.code_systems');
  });

  it('should return hidden fields', () => {
    expect(CodeSystemModel.hidden).toEqual(['updatedAt', 'createdAt', 'type']);
  })

  it('should have a jsonSchema', () => {
    expect(CodeSystemModel.jsonSchema).toBeDefined();
    expect(CodeSystemModel.jsonSchema).toEqual({
      type: 'object',
      title: 'CodeSystem Schema Validation',
      required: ['code', 'type', 'system'],
      properties: {
        code: { type: 'string' },
        display: { type: 'string' },
        type: { type: 'string' },
        system: { type: 'string' },
      }
    });
  });
});
