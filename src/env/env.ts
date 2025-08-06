import { EnvSchema } from './env-schema';

const parsedEnv = EnvSchema.safeParse(process.env);

const { success } = parsedEnv;

if (success === false) {
  const { error } = parsedEnv;
  console.error(`Failed to pars env vars: `, error);
  process.exit(1);
}

const { data } = parsedEnv;

export const env = data;
