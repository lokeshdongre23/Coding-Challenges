/**
 * this Constrolller  use to change the enum value of the
 * staus to check out of any user.
 *
 */
import guestSchema from "../models/guestSchema";
import { Request, Response } from "express";

export const checkOutGuest = async (req: Request, res: Response) => {
  try {
    const guest = await guestSchema.findByIdAndUpdate(req.params.id, {
      status: "checked-out",
      checkOutTime: new Date(),
    });

    res.json(guest);
  } catch (error) {
    res.status(500).json({ message: "Check-out failed" });
  }
};
