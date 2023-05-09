import httpStatus from 'http-status';
import { NextFunction, Response } from 'express';
import { AuthenticatedRequest } from '@/middlewares';
import credentialService from '@/services/credential-service';

export async function getCredentials(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    const { userId } = req;
  
    try {
      const credential = await credentialService.getCredentials(userId);
      return res.status(httpStatus.OK).send({
        url: credential.url,
        username: credential.username,
        password: credential.password
      });
    } catch (error) {
      next(error);
    }
  }