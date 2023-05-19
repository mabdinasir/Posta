import { dotenv } from "../deps.ts";

export async function getEnv() {
  return {
    ...await dotenv(),
    ...Deno.env.toObject(),
  };
}
