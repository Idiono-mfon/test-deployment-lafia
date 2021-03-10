import { Response } from 'express';
import { injectable } from 'inversify';
import Joi from 'joi';

@injectable()
export abstract class BaseController {
  protected async validateRequest(
    requestBody: any,
    validationSchema: Joi.Schema,
  ) {
    const error = validationSchema.validate(requestBody);

    if (error.error) {
      return error.error.details[0].message;
    }
  }

  protected async success(
    res: Response,
    data: any = [],
    message: string = '',
    httpStatus: number = 200,
  ) {
    return res.status(httpStatus).send({
      status: 'success',
      message,
      data,
    });
  }

  protected async error(
    res: Response,
    code: string,
    message: string,
    httpStatus: number = 400,
  ) {
    return res.status(httpStatus).send({
      status: 'error',
      code,
      message,
    });
  }
}
