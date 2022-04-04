import { Router } from "express";
import { creat, get, getAll, productCate, remove, update } from "../controllers/product";


const router = Router();

router.get("/products",getAll);
router.get("/product/:id",get);
router.get("/products/ct=:cate",productCate);
router.delete("/product/:id",remove);
router.put("/product/:id",update);
router.post("/products",creat);

export default router;