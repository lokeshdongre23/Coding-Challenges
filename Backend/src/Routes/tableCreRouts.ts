import { Router } from "express";
import createTable from "../Controller/createTable";

const router = Router();

router.get("/", createTable.getTables);
router.post("/", createTable.createtable);

export default router;
