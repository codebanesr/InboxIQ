import { PrismaClient } from '@prisma/client';

let prisma: PrismaClient | undefined;

const getClient = (): PrismaClient => {
  if (!prisma) {
    prisma = new PrismaClient();
  }

  return prisma;
};

export default getClient();
