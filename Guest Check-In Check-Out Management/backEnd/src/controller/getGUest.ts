import guestSchema from "../models/guestSchema";
import { Request, Response } from "express";

export const getGuests = async (req: Request, res: Response) => {
  try {
    const guests = await guestSchema.find({});
    res.json(guests);
  } catch (error) {
    res.status(500).json({ message: "Error fetching guests" });
  }
};
