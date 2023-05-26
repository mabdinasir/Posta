import { Context } from '../../../deps.ts'
import { prisma } from '../../../helpers/prismaConfig.ts'
import UserType from '../../../models/Users/UserType.ts'

const updateUserType = async (ctx: Context) => {
	const body = ctx.request.body()
	const userType: UserType = await body.value
	const url = ctx.request.url.href
	const userTypeId = url.substring(url.lastIndexOf('/') + 1)

	try {
		if (!userType || !userTypeId) {
			ctx.response.status = 400
			ctx.response.body = {
				success: false,
				message: 'Body or user type ID is missing!',
			}
			return
		}

		const existingUserType = await prisma.userType.findUnique({
			where: { id: userTypeId },
		})

		if (!existingUserType) {
			ctx.response.status = 404
			ctx.response.body = {
				success: false,
				message: 'User type not found!',
			}
			return
		}

		const updatedUserType = await prisma.userType.update({
			where: { id: userTypeId },
			data: {
				name: userType.name,
				updatedBy: userType.updatedBy || '',
			},
		})

		ctx.response.status = 200
		ctx.response.body = {
			success: true,
			message: 'User type updated successfully!',
			userType: updatedUserType,
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

export { updateUserType }
