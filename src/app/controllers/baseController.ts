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
    headers?: any
  ) {
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
    let { code, message }: {code: any, message: string} = e;

    if (code?.status || code?.headers) {
      const { status: statusCode, headers, data } = code;

      delete headers['transfer-encoding'];
      headers['x-powered-by'] = 'LAFIA FHIR 5.4.0 REST Server (FHIR Server; FHIR 4.0.1/R4)';

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
