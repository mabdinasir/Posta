import { Context } from "../../../deps.ts";
import { generateJwtToken } from "../../../helpers/generateJwtToken.ts";
import { comparePassword } from "../../../helpers/passwordEncrypt.ts";
import { prisma } from "../../../helpers/prismaConfig.ts";
import User from "../../../models/User.ts";

const signIn = async (ctx: Context) => {
	const body = ctx.request.body();
	const user: User = await body.value;
	const { email, password, isGoogleAuth, isEmailVerified } = user;

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

		if (!existingUser || existingUser.isDeleted) {
			ctx.response.status = 400;
			ctx.response.body = {
				success: false,
				message: "User does not exist! Please sign up instead.",
			};
			return;
		}

		const passwordMatch = await comparePassword(
			password,
			existingUser?.password!
		);

		if (!passwordMatch) {
			ctx.response.status = 401;
			ctx.response.body = {
				success: false,
				message: "Incorrect password",
			};
			return;
		}

		// Passwords match, successful login
		const jwt = await generateJwtToken({ ...user });

		await prisma.user.update({
			where: { email },
			data: {
				isSignedIn: true,
				isGoogleAuth,
				isEmailVerified,
			},
		});

		await ctx.cookies.set("jwt", jwt, {
			httpOnly: true,
			sameSite: "strict",
		});
		console.log("jwt", jwt);

		ctx.response.status = 200;
		ctx.response.body = {
			success: true,
			message: "Login successful",
			jwt,
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

export { signIn };
