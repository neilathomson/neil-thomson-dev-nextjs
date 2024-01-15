# Welcome to the repository for my personal résumé site - Please have a look around

## Authentication

The admin console is secured using Auth0, see the following link for more details:

https://developer.auth0.com/resources/guides/web-app/nextjs/basic-authentication#use-middleware-to-protect-next-js-pages

## ORM

Prisma is used for ORM in teh application, see the following link for details:

https://vercel.com/guides/nextjs-prisma-postgres

Adding data can be done via `npx prisma studio` or directly in Vercel (eg. `SELECT * FROM public."About";`)

Sync the database with the schema via `npx prisma db push`

Generate the client code via `npx prisma generate`

## Deployment

The application is deployed on Vercel
