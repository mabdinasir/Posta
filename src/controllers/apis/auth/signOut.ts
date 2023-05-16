import { Context } from "../../../deps.ts";
import { prisma } from "../../../helpers/prismaConfig.ts";

const signOut = async (ctx: Context) => {
	const body = ctx.request.body();
	const { email, ...rest } = await body.value;

	if (Object.keys(rest).length > 0) {
		ctx.response.status = 400;
		ctx.response.body = {
			success: false,
			message: "Invalid request body. Only 'email' field is allowed.",
		};
		return;
	}

	try {
		if (!email) {
			ctx.response.status = 404;
			ctx.response.body = {
				success: false,
				message: "Please enter a valid email!",
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
		}

		if (!existingUser.isSignedIn) {
			ctx.response.status = 400;
			ctx.response.body = {
				success: false,
				message: "User is not signed in!",
			};
			return;
		}
		ctx.cookies.delete("jwt");

		await prisma.user.update({
			where: { email },
			data: {
				isSignedIn: false,
			},
		});

		ctx.response.status = 200;
		ctx.response.body = {
			success: true,
			message: "Successfully signed out!",
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

export { signOut };
