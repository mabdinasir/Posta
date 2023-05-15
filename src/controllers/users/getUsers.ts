import { Context, PrismaClient, configAsync } from "../../deps.ts";

const config = await configAsync();

const prisma = new PrismaClient({
	datasources: {
		db: {
			url: config.PRISMA_CLIENT_URL,
		},
	},
});

const getUsers = async (ctx: Context) => {
	const users = await prisma.user.findMany();
	ctx.response.body = users;
};

export { getUsers };
