import Joi from 'joi';

export const CreateHmacSecretSchema = Joi.object({
  user_id: Joi.string().required(),
});
