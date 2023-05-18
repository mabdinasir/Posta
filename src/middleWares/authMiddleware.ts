import { Context, verify } from '../deps.ts'
import { secretKey } from '../helpers/generateJwtToken.ts'

const authMiddleware = async (ctx: Context, next: () => Promise<unknown>) => {
	const headers: Headers = ctx.request.headers
	const authorization = headers.get('Authorization')
	const cookies = (await ctx.cookies.get('jwt')) || ''
	console.log('secretKey', secretKey)

	if (!authorization || !cookies) {
		ctx.response.status = 401
		ctx.response.body = {
			success: false,
			message: 'Authorization failed!',
		}
		return
	}

	const jwt = authorization.split(' ')[1]
	try {
		const verifiedJwt = await verify(jwt, secretKey)
		if (verifiedJwt && cookies) {
			ctx.response.body = {
				success: true,
				message: 'Authentication successful',
			}
			await next()
			return
		}
	} catch (error) {
		ctx.response.status = 401
		ctx.response.body = {
			success: false,
			message: 'Invalid JWT token',
		}
		return
	}

	ctx.response.status = 401
	ctx.response.body = {
		success: false,
		message: 'Invalid JWT token',
	}
}

export default authMiddleware
