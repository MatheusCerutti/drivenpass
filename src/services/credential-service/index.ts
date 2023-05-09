import credentialRepository from '@/repositories/credential-repository';
import { notFoundError } from '@/errors';


async function getCredentials(userId: number) {
    const credential = await credentialRepository.findByUserId(userId);
    if (!credential) throw notFoundError();
  
    return credential;
  }

  const credentialService = {

    getCredentials

  };

  export default credentialService;