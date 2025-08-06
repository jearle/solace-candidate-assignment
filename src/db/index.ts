import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

import { env } from '@/env';

const { DATABASE_URL } = env;

const setup = () => {
  if (!DATABASE_URL) {
    throw new Error(`DATABASE_URL is not set`);
  }

  // for query purposes
  const queryClient = postgres(DATABASE_URL);
  const db = drizzle(queryClient);
  return db;
};

export default setup();
