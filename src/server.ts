import { Application, oakCors } from './deps.ts'
import { getEnv } from './helpers/envLoader.ts'
import router from './routes/index.ts'

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
