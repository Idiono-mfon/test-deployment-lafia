import { Response } from 'express';
import { injectable } from 'inversify';
import Joi from 'joi';
import { GenericResponseError, HttpStatusCode, logger } from '../utils';

@injectable()
export abstract class BaseController {
  protected validateRequest(
    requestBody: any,
    validationSchema: Joi.Schema,
  ) {
    logger.info('Running BaseController::validateRequest');
    const error = validationSchema.validate(requestBody);

    if (error.error) {
      logger.error(`Unable to validate request`, error.error.details[0]);
      return error.error.details[0].message;
    }
  }

  protected success(
    res: Response,
    data: any = [],
    message: string = '',
    httpStatus: number = 200,
    headers?: any
  ) {
    logger.info('Running BaseController::success');
    if (headers) {
      return res.set(headers).status(httpStatus).json(data);
    }

    return res.status(httpStatus).send({
      status: 'success',
      message,
      data,
    });
  }

  protected error(res: Response, e: GenericResponseError) {
    logger.info('Running BaseController::error');
    let { code, message }: {code: any, message: string} = e;

    if (code?.status || code?.headers) {
      const { status: statusCode, headers, data } = code;

      return res.set(headers).status(statusCode).json(data);
    }

    if (!code || typeof code === 'string'! || code > HttpStatusCode.INTERNAL_SERVER_ERROR) {
      code = HttpStatusCode.INTERNAL_SERVER_ERROR;
    }

    return res.status(code).send({
      status: 'error',
      message,
    });
  }
}
