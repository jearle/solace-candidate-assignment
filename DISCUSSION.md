1. Scripts
   a. I'm adding long ugly scripts to `package.json`. Generally, I have a scripts folder and move them in there.

2. Security
   a. I removed these leaked credentials, but really you'd have to alter git history to completely removed them.
   b. I added them back for the sake of this exercise so we wouldn't have to configure everything to use .env.local.

3. Docker
   a. I added a package.json script to run `docker compose down` before starting containers. This clears leftover Docker resources so missing or incomplete `.env.local` won’t cause issues on `docker compose up`.

4. Database
   a. I added back the `npm run seed` command and removed the `POST /api/seed` endpoint as this could be problematic if it got into the wild.

5. Testing
   a. I did not add my usual tests for this exercise. I typically write a 1:1 for a test to implementation file that is publically exported from an index.ts file. I generally also add examples.ts file to each feature folder.

6. Conventions
   a. I generally prefer a feature based folder structure as opposed to a layer based folder structure that is common in Next.js. I find that it scales better, especially in the context of a large repo or monorepo.

7. Empty, Success, Error, Load States
   a. These states are fully ready, but I did not fully implement the visuals in the UI.
