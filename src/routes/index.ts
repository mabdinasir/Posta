import { getUsers } from "../controllers/users/getUsers.ts";
import { Router } from "../deps.ts";

const router = new Router();

router.get("/api/users", getUsers);

export default router;
