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

const users = [
	{
		email: "johndoe@example.com",
		password: "password123",
		firstName: "John",
		lastName: "Doe",
	},
	{
		email: "janedoe@example.com",
		password: "secret",
		firstName: "Jane",
		lastName: "Doe",
	},
];

async function seed() {
	for (const user of users) {
		const newUser = await prisma.user.create({
			data: user,
		});
		console.log(`Created user with id: ${newUser.id}`);
	}
}

seed()
	.catch((e) => console.error(e))
	.finally(async () => {
		await prisma.$disconnect();
	});
