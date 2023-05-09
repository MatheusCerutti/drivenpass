import { Router } from 'express';
import { authenticateToken } from '@/middlewares';
import { getCredentials } from '@/controllers';

const credentialRouter = Router();

credentialRouter.all('/*', authenticateToken).get('',getCredentials);

export { credentialRouter };