interface User {
	id: string;
	email: string;
	password: string;
	firstName: string;
	lastName: string;
	isGoogleAuth: boolean;
	isEmailVerified: boolean;
	isDeleted: boolean;
	isSignedIn: boolean;
	createdAt: Date | string;
	updatedAt: Date | string;
	updatedBy?: string | null;
	userTypeId?: string | null;
}

export default User;
