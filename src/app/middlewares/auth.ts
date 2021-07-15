import { Request, Response, NextFunction } from "express";
import { inject, injectable } from "inversify";
import { BaseMiddleware } from "inversify-express-utils";
import { IUser, UserModel } from "../models";
import jwt from 'jsonwebtoken';
import { Env } from "../config/env";
import { UserService } from "../services";
import TYPES from "../config/types";

interface CastJWTDecodedType {
    email: string;
    iat?: number;
    aud: string
}

const env = Env.all();
@injectable()
export class AuthMiddleware extends BaseMiddleware {

    @inject(TYPES.UserService) private readonly userService: UserService;

    public async handler( req: Request, res: Response,  next: NextFunction ) {
        try {
            const jwtPayload: CastJWTDecodedType = this.decodeJwtToken(req);
            const user = await this.getUserPayload(jwtPayload);
        
            // res.locals.token = jwtPayload.token as string;
            // res.locals.user = user;
            req.body.user = user;
        
            next();
        } catch (e) {
            res.status(401).send({
                status: 'error',
                code: 401,
                message: 'Unable to authenticate'
            });
        }
    }

    private authenticate = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const jwtPayload: CastJWTDecodedType = this.decodeJwtToken(req);
            const user = await this.getUserPayload(jwtPayload);
        
            //res.locals.token = jwtPayload.token as string;
            res.locals.user = user;
        
            next();
        } catch (e) {
            res.status(401).send({
                status: 'error',
                code: 401,
                message: 'Unable to authenticate'
            });
        }
    }

    private decodeJwtToken(req: Request): CastJWTDecodedType {
        const requestHeaderAuthorization: string = req.headers.authorization as string;

        if (!requestHeaderAuthorization) {
            throw new Error('Unable to authenticate.');
        }
    
        const [authBearer, token] = requestHeaderAuthorization.split(' ');
    
        if (authBearer !== 'Bearer') {
            throw new Error('Unable to authenticate.');
        }
    
        const decoded = jwt.verify(token, env.jwt_secrete_key);
        console.log(decoded);
        const jwtPayload = decoded as CastJWTDecodedType;
    
        //jwtPayload.token = token;
    
        return jwtPayload;
    }

    private async getUserPayload(payload: CastJWTDecodedType): Promise<IUser> {
      const user: IUser | null = await this.userService.getOneUser({
        id: payload.aud
      });
    
      if (!user) {
        throw new Error('UserModel not found.');
      }
    
      return user;
    }


}

// import { Request, Response, NextFunction } from 'express';
// import jwt from 'jsonwebtoken';
// import { Env } from '../config/env';
// import { UserModel } from '../models';
//
// interface CastJWTDecodedType {
//   _id: string;
//   token?: string;
// }
//
// const env = Env.all();
//
// export const authenticate = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
//   try {
//     const jwtPayload: CastJWTDecodedType = decodeJwtToken(req);
//     const user = await getUserPayload(jwtPayload);
//
//     res.locals.token = jwtPayload.token as string;
//     res.locals.user = user;
//
//     next();
//   } catch (e) {
//     res.status(401).send({
//       status: 'error',
//       code: 401,
//       message: 'Unable to authenticate'
//     });
//   }
// };
//
// function decodeJwtToken(req: Request): CastJWTDecodedType {
//   const requestHeaderAuthorization: string = req.headers.authorization as string;
//
//   if (!requestHeaderAuthorization) {
//     throw new Error('Unable to authenticate.');
//   }
//
//   const [authBearer, token] = requestHeaderAuthorization.split(' ');
//
//   if (authBearer !== 'Bearer') {
//     throw new Error('Unable to authenticate.');
//   }
//
//   const decoded = jwt.verify(token, env.jwt_secrete_key);
//   const jwtPayload = decoded as CastJWTDecodedType;
//
//   jwtPayload.token = token;
//
//   return jwtPayload;
// }
//
// async function getUserPayload(payload: CastJWTDecodedType): Promise<IUser> {
//   const user: IUser | null = await UserModel.findOne({
//     _id: payload._id,
//     'tokens.token': payload.token
//   });
//
//   if (!user) {
//     throw new Error('UserModel not found.');
//   }
//
//   return user;
// }
