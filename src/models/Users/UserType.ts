import User from './User.ts'

interface UserType {
	id: string
	name: string
	createdAt?: Date | string
	createdBy?: string
	updatedAt: Date | string
	updatedBy?: string
	users?: User[]
}

export default UserType
