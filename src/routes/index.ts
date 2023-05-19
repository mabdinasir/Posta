import { signIn } from '../controllers/apis/auth/signIn.ts'
import { signOut } from '../controllers/apis/auth/signOut.ts'
import { signUp } from '../controllers/apis/auth/signUp.ts'
import { addUser } from '../controllers/apis/users/addUser.ts'
import { deleteUser } from '../controllers/apis/users/deleteUser.ts'
import { getUserById } from '../controllers/apis/users/getUserById.ts'
import { getUsers } from '../controllers/apis/users/getUsers.ts'
import { updateUser } from '../controllers/apis/users/updateUser.ts'
import { Router } from '../deps.ts'
import { authMiddleware } from '../middleWares/authMiddleware.ts'

const router = new Router()

router
	.post('/api/auth/signup', signUp)
	.post('/api/auth/signin', signIn)
	.post('/api/auth/signout', signOut)
	.get('/api/users', authMiddleware, getUsers)
	.post('/api/users', authMiddleware, addUser)
	.get('/api/users/:id', authMiddleware, getUserById)
	.put('/api/users/:id', authMiddleware, updateUser)
	.delete('/api/users/:id', authMiddleware, deleteUser)

export default router
