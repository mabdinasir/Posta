import { PrismaClient } from '../deps.ts'
import { getEnv } from './envLoader.ts'

const PRISMA_CLIENT_URL = Deno.env.get('PRISMA_CLIENT_URL') as string

await getEnv()

const prisma = new PrismaClient({
	datasources: {
		db: {
			url: PRISMA_CLIENT_URL,
		},
	},
})

export { prisma }
