import { PrismaClient } from '@prisma/client';

if (!process.env.DATABASE_URL) {
  console.error('CRITICAL: DATABASE_URL environment variable is missing!');
} else {
  console.log('DATABASE_URL is present.');
}

const prisma = new PrismaClient();

export default prisma;
