import { Context } from "../../../deps.ts";
import { generateJwtToken } from "../../../helpers/generateJwtToken.ts";
import { encryptPassword } from "../../../helpers/passwordEncrypt.ts";
import { prisma } from "../../../helpers/prismaConfig.ts";
import User from "../../../models/User.ts";

const signUp = async (ctx: Context) => {
	const body = ctx.request.body();
	const user: User = await body.value;
	const { email, password, firstName, lastName } = user;

	try {
		if (!email || !password || !firstName || !lastName) {
			ctx.response.status = 404;
			ctx.response.body = {
				success: false,
				message: "Please enter valid sign up details!",
			};
			return;
		}

		const existingUser = await prisma.user.findUnique({
			where: { email },
		});

		if (!existingUser) {
			const jwt = await generateJwtToken({ ...user }, 89789633);
			const newUser = await prisma.user.create({
				data: {
					email,
					password: await encryptPassword(password),
					firstName,
					lastName,
					isSignedIn: true,
				},
			});
			ctx.response.status = 201;
			ctx.response.body = {
				success: true,
				message: "User created successfully and signed in!",
				user: newUser,
				jwt,
			};
		}

		if (existingUser) {
			if (!existingUser.isDeleted) {
				ctx.response.status = 400;
				ctx.response.body = {
					success: false,
					message: "User already exists! Please sign in instead.",
				};
			} else {
				const restoredUser = await prisma.user.update({
					where: { email: user.email },
					data: {
						isDeleted: false,
						isSignedIn: true,
						password: await encryptPassword(password),
					},
				});
				ctx.response.status = 200;
				ctx.response.body = {
					success: true,
					message: "User restored successfully and signed in!",
					user: restoredUser,
					jwt: await generateJwtToken({ ...user }, 89789633),
				};
			}
		}
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

export { signUp };