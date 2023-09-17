import { env } from '@/env';
import type { Config } from 'drizzle-kit';

export default {
  schema: './src/schema/*',
  driver: 'pg',
  out: './drizzle',
  dbCredentials: {
    connectionString: `${env.DATABASE_URL}?sslmode=require`,
  },
} satisfies Config;
