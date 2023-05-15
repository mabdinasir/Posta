import { Context } from "../../../deps.ts";
import { prisma } from "../../../helpers/prismaConfig.ts";

const getUsers = async (ctx: Context) => {
	try {
		const users = await prisma.user.findMany();
		if (users.length > 0) {
			ctx.response.status = 200;
			ctx.response.body = {
				success: true,
				users,
			};
		} else {
			ctx.response.body = {
				success: false,
				users: [],
			};
		}
	} catch (err) {
		ctx.response.status = 500;
		ctx.response.body = {
			success: false,
			msg: err.toString(),
		};
	} finally {
		await prisma.$disconnect();
	}
};

export { getUsers };
