import { JSONSchema } from 'objection';

export const ComponentValidation: JSONSchema = {
    type: 'object',
    title: 'Component Schema Validation',
    required: ['label_id', 'name', 'fields'],
    properties: {
        label_id: {type: 'string'},
        name: { type: 'string' },
        fields: { type: 'object' },
    }
}
