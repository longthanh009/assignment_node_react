import { Router } from "express";
import { creat, get, getAll, productCate, remove, update } from "../controllers/product";
import { userById } from "../controllers/user";
import { isAdmin, isAuth } from "../middlewares/auth";


const router = Router();

router.get("/products",getAll);
router.get("/product/:id",get);
router.get("/products/ct=:cate",productCate);
router.delete("/product/:id",remove);
router.put("/product/:id",update);
router.post("/products/:userId",userById,isAuth,isAdmin,creat);

router.param('userId',userById);
export default router;