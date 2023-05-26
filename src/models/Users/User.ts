import UserType from './UserType.ts'

interface User {
	id: string
	email: string
	password: string
	firstName: string
	lastName: string
	isGoogleAuth: boolean
	isEmailVerified: boolean
	isDeleted: boolean
	isSignedIn: boolean
	createdAt: string
	createdBy?: string | null
	updatedAt: string
	updatedBy?: string | null
	userTypes: UserType[]
}

export default User
