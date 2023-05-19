import { verify } from 'https://deno.land/x/djwt@v2.8/mod.ts'
import { Context } from '../deps.ts'
import { secretKey } from '../helpers/generateJwtToken.ts'

export const authMiddleware = async (
	ctx: Context,
	next: () => Promise<unknown>,
) => {
	const Authorization = ctx.request.headers.get('Authorization')
	const cookies = await ctx.cookies.get('jwt') || ''

	if (!Authorization && !cookies) {
		ctx.response.status = 401
		ctx.response.body = {
			success: false,
			message: 'No token provided',
		}
		return
	}

	try {
		const jwt = Authorization ? Authorization.split(' ')[1] : cookies
		const payload = await verify(jwt, secretKey)
		if (payload) {
			ctx.state.user = payload
			await next()
		} else {
			ctx.response.status = 401
			ctx.response.body = {
				success: false,
				message: 'Invalid token',
			}
		}
	} catch (err) {
		ctx.response.status = 401
		ctx.response.body = {
			success: false,
			message: err.toString(),
		}
	}
}
