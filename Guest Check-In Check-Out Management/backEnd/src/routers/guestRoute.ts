import express, { Router } from "express";
import { createGuest } from "../controller/createGUest";
import { getGuests } from "../controller/getGUest";
import { checkInGuest } from "../controller/checkIn";
import { checkOutGuest } from "../controller/checkOut";

const router = Router();

router.post("/", createGuest);
router.get("/", getGuests);
router.put("/:id/checkin", checkInGuest);
router.put("/:id/checkout", checkOutGuest);

export default router;
