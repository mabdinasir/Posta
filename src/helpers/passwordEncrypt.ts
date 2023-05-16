import { bcrypt } from "../deps.ts";

async function encryptPassword(password: string): Promise<string> {
	const saltRounds = 10;
	const salt = await bcrypt.genSalt(saltRounds);
	const hashedPassword = await bcrypt.hash(password, salt);
	return hashedPassword;
}

async function comparePassword(
	password: string,
	hashedPassword: string
): Promise<boolean> {
	const isPasswordValid = await bcrypt.compare(password, hashedPassword);
	return isPasswordValid;
}

export { encryptPassword, comparePassword };
