import { signIn } from '../controllers/apis/auth/signIn.ts'
import { signOut } from '../controllers/apis/auth/signOut.ts'
import { signUp } from '../controllers/apis/auth/signUp.ts'
import { addUserType } from '../controllers/apis/userTypes/addUserType.ts'
import { deleteUserType } from '../controllers/apis/userTypes/deleteUserType.ts'
import { getUserTypeById } from '../controllers/apis/userTypes/getUserTypeById.ts'
import { getUserTypes } from '../controllers/apis/userTypes/getUserTypes.ts'
import { updateUserType } from '../controllers/apis/userTypes/updateUserType.ts'
import { addUser } from '../controllers/apis/users/addUser.ts'
import { deleteUser } from '../controllers/apis/users/deleteUser.ts'
import { getUserById } from '../controllers/apis/users/getUserById.ts'
import { getUsers } from '../controllers/apis/users/getUsers.ts'
import { updateUser } from '../controllers/apis/users/updateUser.ts'
import { Router } from '../deps.ts'

const router = new Router()

router
	.post('/api/auth/signup', signUp)
	.post('/api/auth/signin', signIn)
	.post('/api/auth/signout', signOut)
	.get('/api/users', getUsers)
	.post('/api/users', addUser)
	.get('/api/users/:id', getUserById)
	.put('/api/users/:id', updateUser)
	.delete('/api/users/:id', deleteUser)
	.get('/api/userTypes', getUserTypes)
	.get('/api/userTypes/:id', getUserTypeById)
	.post('/api/userTypes', addUserType)
	.put('/api/userTypes/:id', updateUserType)
	.delete('/api/userTypes/:id', deleteUserType)

export default router
