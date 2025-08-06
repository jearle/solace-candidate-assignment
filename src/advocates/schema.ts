import { z } from 'zod';

import { responseSchema } from '@/response';
import { STATES } from './constants';

export const advocateSchema = z.object({
  id: z.number().int().positive().optional(),
  firstName: z.string().min(1, { message: 'First name is required.' }),
  lastName: z.string().min(1, { message: 'Last name is required.' }),
  city: z.string().min(1, { message: 'City is required.' }),
  degree: z.string().min(1, { message: 'Degree is required.' }),
  specialties: z.array(z.string()).default([]),
  yearsOfExperience: z.number().int().nonnegative(),
  phoneNumber: z.number(),
  createdAt: z.string().optional(),
});
export type Advocate = Readonly<z.infer<typeof advocateSchema>>;

export const advocateResponseData = z.object({
  advocates: z.array(advocateSchema),
});
export type AdvocateResponseData = Readonly<
  z.infer<typeof advocateResponseData>
>;

export const advocateResponseSchema = responseSchema.extend({
  data: advocateResponseData,
});
export type AdvocateResponse = Readonly<z.infer<typeof advocateResponseSchema>>;

export const advocateStateSchema = z.enum(STATES);
export type AdvocateState = (typeof STATES)[number];

export const advocateResultSchema = z.object({
  advocates: z.array(advocateSchema),
  state: advocateStateSchema,
  errors: z.array(z.string()),
  systemErrors: z.array(z.string()),
});
export type AdvocateResult = Readonly<z.infer<typeof advocateResultSchema>>;
