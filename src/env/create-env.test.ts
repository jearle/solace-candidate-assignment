import { test } from 'node:test';
import { strictEqual } from 'node:assert';

import { env } from './env';
import { EnvSchema } from './env-schema';

test(`createEnv()`, () => {
  const { success } = EnvSchema.safeParse(env);

  strictEqual(success, true);
});
