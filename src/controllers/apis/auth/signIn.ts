import { Context } from '../../../deps.ts'
import {
	generateJwtToken,
	secretKey,
} from '../../../helpers/generateJwtToken.ts'
import { comparePassword } from '../../../helpers/hashPassword.ts'
import { prisma } from '../../../helpers/prismaConfig.ts'
import User from '../../../models/Users/User.ts'

const signIn = async (ctx: Context) => {
	const body = ctx.request.body()
	const user: User = await body.value
	const { email, password, isGoogleAuth } = user

	try {
		if (!email || !password) {
			ctx.response.status = 404
			ctx.response.body = {
				success: false,
				message: 'Please enter a valid email or password!',
			}
			return
		}

		const existingUser = await prisma.user.findUnique({
			where: { email },
		})

		if (!existingUser || existingUser.isDeleted) {
			ctx.response.status = 400
			ctx.response.body = {
				success: false,
				message: 'User does not exist! Please sign up instead.',
			}
			return
		}

		if (existingUser.isSignedIn) {
			ctx.response.status = 400
			ctx.response.body = {
				success: false,
				message: 'User is already signed in!',
			}
			return
		}

		const passwordMatch = await comparePassword(
			password,
			existingUser?.password!,
		)

		if (!passwordMatch) {
			ctx.response.status = 401
			ctx.response.body = {
				success: false,
				message: 'Incorrect email or password!',
			}
			return
		} else {
			const signedInUser = await prisma.user.update({
				where: { email },
				data: {
					isSignedIn: true,
				},
			})

			const jwt = await generateJwtToken({
				...signedInUser,
			}, secretKey)

			await ctx.cookies.set('jwt', jwt, {
				httpOnly: true,
				sameSite: 'strict',
			})

			ctx.response.status = 200
			ctx.response.body = {
				jwt,
			}
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

export { signIn }
