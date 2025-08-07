import { or, ilike, sql } from 'drizzle-orm';

import db from '@/db';
import { advocates as advocatesSchema } from '@/db/schema';

export const createAdvocatesService = () => {
  type GetAdvocatesProps = {
    readonly page: number;
    readonly limit: number;
    readonly search: string;
  };
  const get = async (props: GetAdvocatesProps) => {
    const { page, limit, search } = props;

    const offset = (page - 1) * limit;
    const advocates = await db
      .select()
      .from(advocatesSchema)
      .where(
        or(
          ilike(advocatesSchema.firstName, `%${search}%`),
          ilike(advocatesSchema.lastName, `%${search}%`),
          ilike(advocatesSchema.city, `%${search}%`),
          ilike(advocatesSchema.degree, `%${search}%`),
          sql`${advocatesSchema.specialties}::text ILIKE ${`%${search}%`}`,
        ),
      )
      .limit(limit)
      .offset(offset);

    const result = { advocates };

    return result;
  };

  const advocatesService = { get };

  const result = { advocatesService };

  return result;
};

export const { advocatesService } = createAdvocatesService();
