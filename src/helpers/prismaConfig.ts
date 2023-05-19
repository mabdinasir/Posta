import { PrismaClient } from '../deps.ts'
import { getEnv } from './envLoader.ts'

await getEnv()
const PRISMA_CLIENT_URL = Deno.env.get('PRISMA_CLIENT_URL') as string

const prisma = new PrismaClient({
	datasources: {
		db: {
			url: PRISMA_CLIENT_URL,
		},
	},
})

export { prisma }
