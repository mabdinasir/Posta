import { Context } from '../deps.ts'
import { verifyJwt } from '../helpers/generateJwtToken.ts'

const authMiddleware = async (ctx: Context, next: () => Promise<unknown>) => {
	const headers: Headers = ctx.request.headers
	const authorization = headers.get('Authorization')
	const cookieToken = await ctx.cookies.get('jwt')
	let jwtToken

	if (authorization) {
		jwtToken = authorization.split(' ')[1]
	} else if (cookieToken) {
		jwtToken = cookieToken
	}

	if (!jwtToken) {
		ctx.response.status = 401
		ctx.response.body = {
			success: false,
			message: 'Authorization failed! Please sign in.',
		}
		return
	}

	try {
		const verifiedJwt = await verifyJwt(jwtToken)

		// const existingUser = await prisma.user.findUnique({
		// 	where: { email: verifiedJwt.payload.email },
		// })

		// const passwordMatch = await comparePassword(
		// 	verifiedJwt?.payload?.password,
		// 	existingUser?.password!,
		// )

		// if (
		// 	!passwordMatch || !existingUser || existingUser.isDeleted ||
		// 	!existingUser.isSignedIn
		// ) {
		// 	ctx.response.status = 401
		// 	ctx.response.body = {
		// 		success: false,
		// 		message:
		// 			'Invalid credentials or user is deleted or not signed in!',
		// 	}
		// 	return
		// }

		if (!verifiedJwt) {
			ctx.response.status = 403
			ctx.response.body = {
				success: false,
				message: 'Invalid token',
			}
			return
		} else {
			ctx.response.body = {
				success: true,
				message: 'Authentication successful',
			}
			await next()
		}
	} catch (error) {
		ctx.response.status = 500
		ctx.response.body = {
			success: false,
			message: error.toString(),
		}
		return
	}
}

export default authMiddleware
