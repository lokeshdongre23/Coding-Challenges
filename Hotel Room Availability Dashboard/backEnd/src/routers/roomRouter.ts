import { Router } from "express";
import { getRooms } from "../controler/roomController";

const router = Router();

// Route to fetch rooms
router.get("/", getRooms);

export default router;
