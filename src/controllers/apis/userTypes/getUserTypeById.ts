import { Context } from '../../../deps.ts'
import { prisma } from '../../../helpers/prismaConfig.ts'

const getUserTypeById = async (ctx: Context) => {
	const url = ctx.request.url.href
	const userTypeId = url.substring(url.lastIndexOf('/') + 1)

	try {
		const userType = await prisma.userType.findUnique({
			where: {
				id: userTypeId,
			},
		})

		if (!userType) {
			ctx.response.status = 404
			ctx.response.body = {
				success: false,
				message: 'User type not found',
			}
			return
		}

		ctx.response.status = 200
		ctx.response.body = {
			success: true,
			count: 1,
			userType,
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

export { getUserTypeById }
