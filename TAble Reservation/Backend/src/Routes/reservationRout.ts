import { Router } from "express";
import reservation from "../Controller/reservation";
const router = Router();

router.get("/", reservation.reservedTable);
router.post("/", reservation.bookTable);

export default router;
