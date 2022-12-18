import { Request, Response, NextFunction } from 'express';
import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import { logger, HttpStatusCode, error } from '../utils';
import { IValidationResult } from './interfaces';

export const validationMiddleware = (dtoClass: any) => {
  logger.info('Running ValidationMiddleware.handler');
  return async function (req: Request, res: Response, next: NextFunction) {
    if (req?.body?.emailOrPhone) {
      // Only works for creatingAccountDto
      const { emailOrPhone, ...others } = req.body;
      req.body = { ...others, email: emailOrPhone, phone: emailOrPhone };
    }
    const output: any = plainToInstance(dtoClass, req.body);

    try {
      const errors = await validate(output, {
        skipMissingProperties: true,
        whitelist: true,
        forbidNonWhitelisted: true,
      });

      if (errors.length > 0) {
        //@ts-ignore
        let errorResults: IValidationResult = {
          object: 'error',
          name: 'Bad Request Error',
          statusCode: HttpStatusCode.BAD_REQUEST,
        };

        for (const errorItem of errors) {
          const details = {
            property: errorItem.property as string,
            name: 'Validation Error',
            message: Object.values(errorItem.constraints as object)[0],
          };
          if (!errorResults.details) {
            errorResults.details = [details];
          } else {
            errorResults.details.push(details);
          }
          //@ts-ignore
        }
        return res.status(HttpStatusCode.BAD_REQUEST).send(errorResults);
      }

      req.body = output;
      return next();
    } catch (e: any) {
      logger.error(`Unable to validate user create account -`, e);
      return res
        .status(HttpStatusCode.INTERNAL_SERVER_ERROR)
        .send('Unable to validate a user create account');
    }
  };
};
