import { serve } from "../src/deps.ts";

serve(() => new Response("Hello World!"));

// denon run --allow-net --allow-env --allow-read server.ts