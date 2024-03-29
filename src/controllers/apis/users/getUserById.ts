import { Context } from '../../../deps.ts'
import { prisma } from '../../../helpers/prismaConfig.ts'

const getUserById = async (ctx: Context) => {
	const url = ctx.request.url.href
	const userId = url.substring(url.lastIndexOf('/') + 1)

	try {
		const user = await prisma.user.findUnique({
			where: {
				id: userId,
			},
		})

		if (!user || user.isDeleted) {
			ctx.response.status = 404
			ctx.response.body = {
				success: false,
				message: 'User not found',
			}
			return
		}

		ctx.response.status = 200
		ctx.response.body = {
			success: true,
			count: user ? 1 : 0,
			user: user ? { ...user, password: undefined } : undefined,
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

export { getUserById }
