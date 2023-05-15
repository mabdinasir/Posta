import { PrismaClient,config } from "../deps.ts";

const prisma = new PrismaClient({
	datasources: {
		db: {
			url: config().PRISMA_CLIENT_URL,
		},
	},
});

export { prisma };
