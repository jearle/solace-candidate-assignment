# Jesse Earle - Solace Candidate Assignment

_Note: The default branch is set to `epic/solace-engineering-assignment`, which reflects the final version of my submission. The original code remains on `master`._

## Tested with

- node >=22 =<24
- npm >=10 =<11
- docker 28.3.2

## Steps to run

### 1. Use correct node version

```sh
nvm use v24
# or use fnm or your preferred method
```

### 2. Install dependencies

```sh
npm install
```

### 3. Start postgres with docker

```sh
npm run docker:postgres:dev
```

- select `yes, i want to execute all statements` when prompted.
- make sure port `5432` is available.
- this will:
  - run `docker compose down`
  - run `docker compose up`
  - run `drizzle-kit push`

### 4. Seed the database

```sh
npm run seed
```

- seeds the database with 15 advocate records.

### 5. Start the app

```sh
npm run dev
```

- app will be available at [http://localhost:3000](http://localhost:3000)

## Project management

- **Issues:**
  See how I organized my work using issues:
  [Closed Issues](https://github.com/jearle/solace-candidate-assignment/issues?q=is%3Aissue+state%3Aclosed)

- **Pull Requests:**
  PRs are grouped by type: epic, breaking, feature, improvement, and bug. The epic branch serves as the main integration branch, and the other PRs follow a naming convention inspired by semantic versioning (major, minor, patch):
  [Closed PRs](https://github.com/jearle/solace-candidate-assignment/pulls?q=is%3Apr+is%3Aclosed)

# Original README

## Solace Candidate Assignment

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Install dependencies

```bash
npm i
```

Run the development server:

```bash
npm run dev
```

## Database set up

The app is configured to return a default list of advocates. This will allow you to get the app up and running without needing to configure a database. If you’d like to configure a database, you’re encouraged to do so. You can uncomment the url in `.env` and the line in `src/app/api/advocates/route.ts` to test retrieving advocates from the database.

1. Feel free to use whatever configuration of postgres you like. The project is set up to use docker-compose.yml to set up postgres. The url is in .env.

```bash
docker compose up -d
```

2. Create a `solaceassignment` database.

3. Push migration to the database

```bash
npx drizzle-kit push
```

4. Seed the database

```bash
curl -X POST http://localhost:3000/api/seed
```
