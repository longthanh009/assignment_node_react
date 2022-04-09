import {Router} from "express"
import {userById } from "../controllers/user";

const router = Router();
router.get("/user/:id",userById)
export default router