interface User {
	id: string;
	email: string;
	password: string;
	firstName: string;
	lastName: string;
	isDeleted?: boolean;
	createdAt?: Date | string;
	updatedAt?: Date | string | null;
}

export default User;
