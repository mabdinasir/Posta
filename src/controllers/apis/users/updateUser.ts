import { Context } from "../../../deps.ts";
import { encryptPassword } from "../../../helpers/passwordEncrypt.ts";
import { prisma } from "../../../helpers/prismaConfig.ts";
import User from "../../../models/User.ts";

const updateUser = async (ctx: Context) => {
	const body = ctx.request.body();
	const user: User = await body.value;
	const url = ctx.request.url.href;
	const userId = url.substring(url.lastIndexOf("/") + 1);

	try {
		const existingUser = await prisma.user.findUnique({
			where: { id: userId },
		});

		if (!existingUser) {
			ctx.response.status = 404;
			ctx.response.body = { message: "User not found" };
			return;
		}
		const updatedUser: User = {
			...user,
			password: user.password
				? await encryptPassword(user.password)
				: undefined,
		};

		const updatedUserResult = await prisma.user.update({
			where: { id: userId },
			data: updatedUser,
		});
		ctx.response.status = 200;
		ctx.response.body = {
			success: true,
			message: "User updated successfully",
			user: updatedUserResult
				? { ...updatedUserResult, password: undefined }
				: undefined,
		};
	} catch (error) {
		ctx.response.status = 500;
		ctx.response.body = {
			success: false,
			message: error.toString(),
		};
	} finally {
		await prisma.$disconnect();
	}
};

export { updateUser };
