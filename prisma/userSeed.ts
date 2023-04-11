import { Prisma, PrismaClient } from "../generated/client/deno/edge.ts";
import { config } from "https://deno.land/std@0.163.0/dotenv/mod.ts";

const envVars = await config();

const prisma = new PrismaClient({
    datasources: {
        db: {
            url: envVars.DATABASE_URL,
        },
    },
});

const users: Prisma.UserCreateInput[] = [
    {
        email: "alice@gmail.com",
        firstName: "Alice",
        lastName: "Smith",
        email: "alicesmith@example.com",
        isDeleted: false,
        createdAt: new Date(),
        updatedAt: new Date(),
    },
];

for (const u of users) {
    const user = await prisma.user.create({
        data: u,
    });
    console.log(`Created user with id: ${user.id}`);
}
console.log(`Seeding finished.`);

await prisma.$disconnect();