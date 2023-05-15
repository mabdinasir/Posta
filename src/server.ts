import { Application, config } from "./deps.ts";
import router from "./routes/index.ts";

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

const PORT = config().PORT || 8082;

console.log(`Server running on port ${PORT} `);

await app.listen({ port: +PORT });

// denon run -A server.ts
