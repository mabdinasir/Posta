import { create, Header } from '../deps.ts'
import User from '../models/Users/User.ts'

const secretKey = await crypto.subtle.generateKey(
	{ name: 'HMAC', hash: 'SHA-512' },
	true,
	['sign', 'verify'],
)

const generateJwtToken = async (user: User, secretKey: CryptoKey) => {
	const payload = {
		...user,
	}

	const header: Header = {
		alg: 'HS512',
		typ: 'JWT',
	}

	try {
		const token = await create(header, payload, secretKey)
		return token
	} catch (error) {
		throw new Error('Error generating JWT token')
	}
}

export { generateJwtToken, secretKey }
