import { create, getNumericDate, Header } from '../deps.ts'
import User from '../models/Users/User.ts'

const algorithm = 'HS512'

const secretKey = await crypto.subtle.generateKey(
	{ name: 'HMAC', hash: 'SHA-512' },
	true,
	['sign', 'verify'],
)

const expiresIn = 120

const generateJwtToken = async (user: User) => {
	const payload = {
		...user,
		algorithm,
		secretKey,
		iss: 'posta-auth',
		expiresIn,
		issuedAt: getNumericDate(new Date()),
		nbf: getNumericDate(new Date()),
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
