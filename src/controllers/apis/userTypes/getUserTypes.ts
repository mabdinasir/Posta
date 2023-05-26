import { Context } from '../../../deps.ts'
import { prisma } from '../../../helpers/prismaConfig.ts'

const getUserTypes = async (ctx: Context) => {
	try {
		const userTypes = await prisma.userType.findMany({
			include: {
				users: true,
			},
		})
		if (userTypes.length > 0) {
			ctx.response.status = 200
			ctx.response.body = {
				success: true,
				count: userTypes.length,
				userTypes,
			}
		} else {
			ctx.response.body = {
				success: false,
				userTypes: [],
			}
		}
	} catch (err) {
		ctx.response.status = 500
		ctx.response.body = {
			success: false,
			msg: err.toString(),
		}
	} finally {
		await prisma.$disconnect()
	}
}

export { getUserTypes }
