import { Context } from '../../../deps.ts'
import { comparePassword } from "../../../helpers/hashPassword.ts";
import { prisma } from '../../../helpers/prismaConfig.ts'

const signOut = async (ctx: Context) => {
	const body = ctx.request.body()
	const { email, password, ...rest } = await body.value

	if (Object.keys(rest).length > 0) {
		ctx.response.status = 400
		ctx.response.body = {
			success: false,
			message: 'Invalid request body. Only \'email\' field is allowed.',
		}
		return
	}

	try {
		if (!email) {
			ctx.response.status = 404
			ctx.response.body = {
				success: false,
				message: 'Please enter a valid email!',
			}
			return
		}

		const existingUser = await prisma.user.findUnique({
			where: { email },
		})

		if (!existingUser) {
			ctx.response.status = 400
			ctx.response.body = {
				success: false,
				message: 'User does not exist! Please sign up instead.',
			}
			return
		}

		if (!existingUser.isSignedIn) {
			ctx.response.status = 400
			ctx.response.body = {
				success: false,
				message: 'User is not signed in!',
			}
			return
		}

		await prisma.user.update({
			where: { email },
			data: {
				isSignedIn: false,
			},
		})

		ctx.cookies.set('jwt', '', {
			httpOnly: true,
			secure: false,
			expires: new Date(0),
		})

		ctx.cookies.delete('jwt', {
			httpOnly: true,
			secure: false,
		})

		ctx.response.status = 200
		ctx.response.body = {
			success: true,
			message: 'Successfully signed out!',
		}
	} catch (error) {
		ctx.response.status = 500
		ctx.response.body = {
			success: false,
			message: error.toString(),
		}
	} finally {
		await prisma.$disconnect()
	}
}

export { signOut }
