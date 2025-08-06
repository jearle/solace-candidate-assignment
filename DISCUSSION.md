1. Scripts
   a. I'm adding long ugly scripts to `package.json`. Generally, I have a scripts folder and move them in there.

2. Security
   a. I removed these leaked credentials, but really you'd have to alter git history to completely removed them.
   b. I added them back for the sake of this exercise so we wouldn't have to configure everything to use .env.local.

3. Docker
   a. I added a package.json script to run `docker compose down` before starting containers. This clears leftover Docker resources so missing or incomplete `.env.local` won’t cause issues on `docker compose up`.

4. Database
   a. I added back the `npm run seed` command and removed the `POST /api/seed` endpoint as this could be problematic if it got into the wild.
