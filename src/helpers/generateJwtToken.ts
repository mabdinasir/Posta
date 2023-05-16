import { Header, create } from "https://deno.land/x/djwt@v2.8/mod.ts";
import User from "../models/User.ts";

const secretKey = await crypto.subtle.generateKey(
	{ name: "HMAC", hash: "SHA-512" },
	true,
	["sign", "verify"]
);

const expiresIn = 89789633;

export const generateJwtToken = async (user: User) => {
	const payload = {
		...user,
		expiresIn,
	};

	const header: Header = {
		alg: "HS512",
		typ: "bearer",
	};

	const token = await create(header, payload, secretKey);

	return token;
};
