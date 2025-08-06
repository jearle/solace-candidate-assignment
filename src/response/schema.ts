import { z } from 'zod';

export const responseSchema = z.object({
  errors: z.array(z.string()),
  systemErrors: z.array(z.string()),
});

export type Response = Readonly<z.infer<typeof responseSchema>>;
