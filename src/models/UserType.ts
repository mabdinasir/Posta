import User from "./User.ts";

interface UserType {
	id: string;
	type: string;
	createdAt?: Date | string;
	updatedAt: Date | string;
	updatedBy?: string;
	User?: User[];
}

export default UserType;
