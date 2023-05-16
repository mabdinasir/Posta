import { Context } from "../../../deps.ts";
import { prisma } from "../../../helpers/prismaConfig.ts";
import User from "../../../models/User.ts";

const addUser = async (ctx: Context) => {
	const body = ctx.request.body();
	const users: User[] = await body.value;
	try {
		if (!users) {
			ctx.response.status = 400;
			ctx.response.body = {
				success: false,
				message: "Body is missing!",
			};
			return;
		}

		const duplicateEmails = await Promise.all(
			users.map(async (userValue) => {
				const user = await prisma.user.findUnique({
					where: {
						email: userValue.email,
					},
				});
				return user ? 1 : 0;
			})
		);

		if (duplicateEmails.some((count) => count > 0)) {
			ctx.response.status = 400;
			ctx.response.body = {
				success: false,
				meessage:
					"Email(s) provided exists(s). Please provide unique email(s)!",
			};
			return;
		}

		const createdUsers = await Promise.all(
			users.map(async (userValue) => {
				const newUser = {
					email: userValue.email,
					password: userValue.isGoogleAuth ? undefined : userValue.password,
					firstName: userValue.firstName,
					lastName: userValue.lastName,
					isGoogleAuth: userValue.isGoogleAuth ?? false,
					isEmailVerified: userValue.isEmailVerified ?? false,
					isDeleted: false,
					isSignedIn: true,
				};

				const createdUser = await prisma.user.create({ data: newUser });
				return createdUser;
			})
		);
		ctx.response.status = 201;
		ctx.response.body = {
			success: true,
			message: "User(s) created successfully!",
			count: createdUsers.length,
			users: createdUsers,
		};
	} catch (error) {
		console.log(error);
		ctx.response.status = 500;
		ctx.response.body = {
			success: false,
			message: "Internal server error",
		};
	} finally {
		await prisma.$disconnect();
	}
};

export { addUser };
