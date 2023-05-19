import { bcrypt } from '../deps.ts'

async function hashPassword(password: string): Promise<string> {
	const saltRounds = 12
	const salt = await bcrypt.genSalt(saltRounds)
	const hashedPassword = await bcrypt.hash(password, salt)
	return hashedPassword
}

async function comparePassword(
	candidatePassword: string,
	hashedPassword: string,
): Promise<boolean> {
	return await bcrypt.compare(candidatePassword, hashedPassword)
}

export { comparePassword, hashPassword }
