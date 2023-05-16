import "https://deno.land/std@0.173.0/dotenv/load.ts";
import { PrismaClient } from "../deps.ts";

const PRISMA_CLIENT_URL = Deno.env.get("PRISMA_CLIENT_URL") as unknown as string;

const prisma = new PrismaClient({
	datasources: {
		db: {
			url: PRISMA_CLIENT_URL,
		},
	},
});

export { prisma };
