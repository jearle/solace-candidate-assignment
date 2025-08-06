import db from '@/db';
import { advocates as advocatesSchema } from '@/db/schema';

export const createAdvocatesService = () => {
  const get = async () => {
    const advocates = await db.select().from(advocatesSchema);

    const result = { advocates };

    return result;
  };

  const advocatesService = { get };

  const result = { advocatesService };

  return result;
};

export const { advocatesService } = createAdvocatesService();
