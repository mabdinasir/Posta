import { signIn } from '../controllers/apis/auth/signIn.ts'
import { signOut } from '../controllers/apis/auth/signOut.ts'
import { signUp } from '../controllers/apis/auth/signUp.ts'
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

export default router
