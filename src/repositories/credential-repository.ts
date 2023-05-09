import { prisma } from '@/config';


async function findByUserId(userId: number) {
    return prisma.credential.findFirst({
      where: {
        userId
      }
    });
  }


  const credentialRepository = {

    findByUserId

  };

  export default credentialRepository;