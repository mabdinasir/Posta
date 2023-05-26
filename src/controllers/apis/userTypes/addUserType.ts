import { Context } from '../../../deps.ts'
import { prisma } from '../../../helpers/prismaConfig.ts'
import UserType from '../../../models/Users/UserType.ts'

const addUserType = async (ctx: Context) => {
	const body = ctx.request.body()
	const userTypes: UserType[] = await body.value

	try {
		if (
			!userTypes || userTypes.length === 0 ||
			userTypes.some((userType) => !userType.name)
		) {
			ctx.response.status = 400
			ctx.response.body = {
				success: false,
				message: 'Invalid user type(s) provided!',
			}
			return
		}

		const existingUserTypes = await prisma.userType.findMany({
			where: {
				name: {
					in: userTypes.map((userType) => userType.name),
				},
			},
		})

		if (existingUserTypes.length > 0) {
			const duplicateTypes = existingUserTypes.map((userType) =>
				userType.name
			)
			ctx.response.status = 400
			ctx.response.body = {
				success: false,
				message: `User type(s) already exist: ${
					duplicateTypes.join(', ')
				}`,
			}
			return
		}

		const createdUserTypes = await prisma.userType.createMany({
			data: userTypes.map((userType) => ({
				name: userType.name,
				createdBy: userType.createdBy || '',
				updatedBy: userType.updatedBy || '',
			})),
		})

		ctx.response.status = 201
		ctx.response.body = {
			success: true,
			message: 'User type(s) created successfully!',
			userTypes: createdUserTypes,
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

export { addUserType }
