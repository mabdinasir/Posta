import User from '../Users/User.ts'

export interface IDecodedJwt extends User {
	expiresIn: number
}
