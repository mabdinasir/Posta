import { Context } from "../../../deps.ts";
import { generateJwtToken } from "../../../helpers/generateJwtToken.ts";
import { prisma } from "../../../helpers/prismaConfig.ts";
import User from "../../../models/User.ts";

const signIn = async (ctx: Context) => {
	const body = ctx.request.body();
	const user: User = await body.value;
	const { email, password } = user;

	try {
		if (!email || !password) {
			ctx.response.status = 404;
			ctx.response.body = {
				success: false,
				message: "Please enter valid email or password!",
			};
			return;
		}

		const existingUser = await prisma.user.findUnique({
			where: { email },
		});

		if (!existingUser) {
			ctx.response.status = 400;
			ctx.response.body = {
				success: false,
				message: "User does not exist! Please sign up instead.",
			};
			return;
		} else {
			if (existingUser.isDeleted) {
				ctx.response.status = 400;
				ctx.response.body = {
					success: false,
					message: "User does not exist! Please sign up instead.",
				};
				return;
			}
			if (existingUser.password !== password) {
				ctx.response.status = 400;
				ctx.response.body = {
					success: false,
					message: "Password is incorrect!",
				};
				return;
			}
			const jwt = await generateJwtToken({ ...user }, 89789633);
			const updatedUser = await prisma.user.update({
				where: { email: user.email },
				data: { isSignedIn: true },
			});
			ctx.response.status = 200;
			ctx.response.body = {
				success: true,
				message: "User signed in successfully!",
				jwt,
			};
		}
	} catch (error) {
		ctx.response.status = 500;
		ctx.response.body = {
			success: false,
			message: "Internal server error",
		};
	} finally {
		await prisma.$disconnect();
	}
};

export { signIn };
