export class Auth {}

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
