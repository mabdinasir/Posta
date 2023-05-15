import { addUser } from "../controllers/apis/users/addUser.ts";
import { getUsers } from "../controllers/apis/users/getUsers.ts";
import { Router } from "../deps.ts";

const router = new Router();

router
  .get("/api/users", getUsers)
  .post("/api/users", addUser)

export default router;
