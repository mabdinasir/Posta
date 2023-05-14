interface User {
	id: string;
	email: string;
	password: string;
	firstName: string;
	lastName: string;
	isDeleted?: boolean;
	createdAt?: Date | string;
	createdBy?: string;
	updatedAt: Date | string;
	updatedBy?: string;
}

export default User;
