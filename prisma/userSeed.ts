import { config } from "https://deno.land/std@0.163.0/dotenv/mod.ts";
import { PrismaClient } from "../generated/client/deno/edge.ts";

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
];

async function seedUser() {
	for (const user of users) {
		const newUser = await prisma.user.create({
			data: user,
		});
		console.log(`Created user with id: ${newUser.id}`);
	}
}

seedUser()
	.catch((e) => console.error(e))
	.finally(async () => {
		await prisma.$disconnect();
	});


const userTypes = [
	{
		type: "Admin",
	},
	{
		type: "customer",
	},
	{
		type: "manager",
	},
	{
		type: "employee",
	},
];

async function seedUserType() {
	for (const userType of userTypes) {
		const newUserType = await prisma.userType.create({
			data: userType,
		});
		console.log(`Created userType with id: ${newUserType.id}`);
	}
}

seedUserType()
	.catch((e) => console.error(e))
	.finally(async () => {
		await prisma.$disconnect();
	});
