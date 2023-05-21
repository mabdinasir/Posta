import { verify } from 'https://deno.land/x/djwt@v2.8/mod.ts'
import { Context } from '../deps.ts'
import { secretKey } from '../helpers/generateJwtToken.ts'

export const authMiddleware = async (
	ctx: Context,
	next: () => Promise<unknown>,
) => {
	const headers: Headers = ctx.request.headers
	const authorization = headers.get('Authorization')
	const cookies = await ctx.cookies.get('jwt') || ''

	if (!authorization && !cookies) {
		ctx.response.status = 401
		ctx.response.body = {
			success: false,
			message: 'No token provided',
		}
		return
	}

	try {
		const jwt = authorization?.split(' ')[1]
		const verifiedJwt = jwt && await verify(jwt, secretKey)
		if (verifiedJwt) {
			ctx.response.body = {
				success: true,
				msg: 'Authentication successful',
			}
			await next()
			return
		} else {
			ctx.response.status = 401
			ctx.response.body = {
				success: false,
				message: 'Invalid token',
			}
		}
	} catch (err) {
		ctx.response.status = 500
		ctx.response.body = {
			success: false,
			message: err.toString(),
		}
	}
}
