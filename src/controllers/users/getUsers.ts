import { Context, PrismaClient, config } from "../../deps.ts";

const env = await config();

const prisma = new PrismaClient({
	datasources: {
		db: {
			url: env.PRISMA_CLIENT_URL,
		},
	},
});

const getUsers = async (ctx: Context) => {
	const users = await prisma.user.findMany();
	ctx.response.body = users;
};

export { getUsers };
