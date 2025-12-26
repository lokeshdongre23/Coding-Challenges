import guestSchema from "../models/guestSchema";
import { Request, Response } from "express";

export const createGuest = async (req: Request, res: Response) => {
  try {
    const guest = await guestSchema.create({ name: req.body.name });
    res.status(201).json(guest);
  } catch (error) {
    res.status(500).json({ message: "Error creating guest" });
  }
};
