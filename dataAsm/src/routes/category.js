import { Router } from "express";
import { create, list, read, update } from "../controllers/category";

const router = Router();

router.get("/categorys",list);
router.post("/categorys",create);
router.put("/category/:id",update)
router.get("/category/:id",read);


export default router;