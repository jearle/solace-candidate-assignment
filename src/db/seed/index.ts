import db from '@/db';
import { advocates } from '@/db/schema';
import { advocateData } from '@/db/seed/advocates';

const seed = async () => {
  const records = await db.insert(advocates).values(advocateData).returning();

  return Response.json({ advocates: records });
};

export default seed;

const main = async () => {
  console.log(`seeding database with advocates`);
  await seed();
  console.log(`done`);
  process.exit(0);
};

const isMain = process.argv[1] === __filename;
if (isMain) {
  main();
}
