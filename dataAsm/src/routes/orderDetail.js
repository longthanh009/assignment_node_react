import {Router} from "express"
import { create ,list} from "../controllers/orderDetail";
const router = Router(); 

router.post("/orderdetail",create);
router.get("/orderdetail/:id",list);

export default router