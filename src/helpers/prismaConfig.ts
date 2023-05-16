import "https://deno.land/std@0.173.0/dotenv/load.ts";
import { PrismaClient } from "../deps.ts";

const prisma = new PrismaClient({
	datasources: {
		db: {
			url: Deno.env.get("PRISMA_CLIENT_URL"),
		},
	},
});

export { prisma };
