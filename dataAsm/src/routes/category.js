import { Router } from "express";
import { create, list, read, remove, update } from "../controllers/category";

const router = Router();

router.get("/categorys",list);
router.post("/categorys",create);
router.delete("/category/:id",remove);
router.put("/category/:id",update)
router.get("/category/:id",read);


export default router;