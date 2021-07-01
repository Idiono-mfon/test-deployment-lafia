import { Response } from 'express';
import { injectable } from 'inversify';
import Joi from 'joi';
import {GenericResponseError, HttpStatusCode} from '../utils';

@injectable()
export abstract class BaseController {
  protected validateRequest(
    requestBody: any,
    validationSchema: Joi.Schema,
  ) {
    const error = validationSchema.validate(requestBody);

    if (error.error) {
      return error.error.details[0].message;
    }
  }

  protected success(
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

  protected error(res: Response, e: GenericResponseError) {
    let { code, message } = e;

    if (!code || typeof code === 'string'! || code > HttpStatusCode.INTERNAL_SERVER_ERROR) {
      code = HttpStatusCode.INTERNAL_SERVER_ERROR;
    }

    return res.status(code).send({
      status: 'error',
      message,
    });
  }
}
