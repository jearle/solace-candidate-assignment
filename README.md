# Jesse Earle - Solace Candidate Assignment

## Tested with

- node >=22 <24
- npm >=10 <11
- docker 28.3.2

## Steps to run

1. `nvm use v24`
   a. ensure node is installed using `nvm`, `fnm` or your favorite install method
2. `npm install`
   a. install all deps
3. `npm run docker:postgres:dev`
   a. Select _Yes, I want to execute all statements_
   b. Ensure that your postgres port `5432` is not taken
   b. This will run `docker compose down`, `docker compose up` and `drizzle-kit push`
4. `npm run seed`
   a. This will seed the database with 15 records
5. `npm run dev`
   a. This will run the application at http://localhost:3000

## Project management

Please visit my closed issues https://github.com/jearle/solace-candidate-assignment/issues?q=is%3Aissue%20state%3Aclosed to see how I've structured my issues for this project.

Similarly please see my closed PRs https://github.com/jearle/solace-candidate-assignment/pulls?q=is%3Apr+is%3Aclosed to see how I've structued them.

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
