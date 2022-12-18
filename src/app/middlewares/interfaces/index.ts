import { NextFunction, Request, Response } from 'express';

export interface IAuthMiddleware {
  handler(req: Request, res: Response, next: NextFunction): Promise<void>;

  authenticate(req: Request, res: Response, next: NextFunction): Promise<void>;

  parseThirdPartyConnection(req: Request, res: Response, next: NextFunction): void;
}

export interface CastJWTDecodedType {
  email: string;
  iat?: number;
  aud: string;
}

export interface IValidationResult {
  object: string;
  name: string;
  statusCode: number;
  details: [
    {
      property: string;
      name: string;
      message: string;
    }
  ];
}
