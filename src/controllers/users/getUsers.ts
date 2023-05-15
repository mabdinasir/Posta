import { Context, PrismaClient, config } from "../../deps.ts";

const prisma = new PrismaClient({
	datasources: {
		db: {
			url: config().PRISMA_CLIENT_URL,
		},
	},
});

const getUsers = async (ctx: Context) => {
	const users = await prisma.user.findMany();
	ctx.response.body = users;
};

export { getUsers };
