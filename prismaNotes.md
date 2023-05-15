#Prisma

upgrade Prisma:
      npm install @prisma/client@latest

Add Prisma to Deno:
      deno run --allow-read —-allow-env —-allow-net -A --unstable npm:prisma init

Create DB Schema:
      deno run -A npm:prisma@^4.5 db push

Generate Prisma client:
      deno run -A npm:prisma@^4.5 generate --data-proxy

Run migration:
      npx prisma migrate dev --name {migration-name} --create-only

To seed DB:
      deno run -A prisma/userSeed.ts
