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
        isDeleted: false,
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        email: "janedoe@gmail.com",
        firstName: "Jane",
        lastName: "Doe",
        isDeleted: false,
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        email: "johndoe@gmail.com",
        firstName: "John",
        lastName: "Doe",
        isDeleted: false,
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        email: "jama@gmail.com",
        firstName: "Jama",
        lastName: "Gedi",
        isDeleted: false,
        createdAt: new Date(),
        updatedAt: new Date(),
    },
];

const existingUsers = await prisma.user.findMany();
const existingUserEmails = existingUsers.map((u) => u.email);
const newUsers = users.filter((u) => !existingUserEmails.includes(u.email));

console.log(`Seeding started...`);

for (const u of newUsers) {
    const user = await prisma.user.create({
        data: u,
    });
    console.log(`Created user with id: ${user.id}`);
}
console.log(`Seeding finished.`);

await prisma.$disconnect();
