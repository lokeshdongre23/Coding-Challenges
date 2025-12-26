/**
 * this Constrolller  use to change the enum value of the
 * staus to check in of any user.
 *
 */

import guestSchema from "../models/guestSchema";
import { Request, Response } from "express";

export const checkInGuest = async (req: Request, res: Response) => {
  try {
    const guest = await guestSchema.findByIdAndUpdate(
      req.params.id,
      {
        status: "checked-in",
        checkInTime: new Date(),
        checkOutTime: null,
      },
      { new: true }
    );

    res.json(guest);
  } catch (error) {
    res.status(500).json({ message: "Check-in failed" });
  }
};
