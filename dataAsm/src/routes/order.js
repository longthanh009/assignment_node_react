import {Router} from "express"
import { create, list, read, update } from "../controllers/order";
const router = Router();

router.post("/orders",create);
router.get("/orders",list);
router.put("/order/:id",update);
router.get("/orders/:username",read)
export default router