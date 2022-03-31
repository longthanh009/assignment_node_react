import { Router } from "express";
import { creat, get, getAll, remove } from "../controllers/product";


const router = Router();

router.get("/products",getAll);
router.get("/product/:id",get);
router.delete("/product/:id",remove);
router.post("/products",creat);

export default router;