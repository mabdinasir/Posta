import { Application, oakCors } from './src/deps.ts'
import { getEnv } from './src/helpers/envLoader.ts'
import router from './src/routes/index.ts'

await getEnv()

const app = new Application()

app.use(
	oakCors({
		credentials: true,
		origin: '*',
		optionsSuccessStatus: 200,
	}),
)

app.use(router.routes())
app.use(router.allowedMethods())

const PORT = Deno.env.get('PORT') || 8082

console.log(`Server running on port ${PORT} `)

await app.listen({ port: +PORT })
