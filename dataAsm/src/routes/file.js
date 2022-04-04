import { Router } from "express";
import { create, list, read, remove, update } from "../controllers/file";

const router = Router();

router.get("/files",list);
router.post("/files",create);
router.delete("/file/:id",remove);
router.put("/file/:id",update)
router.get("/file/:id",read);


export default router;