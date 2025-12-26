import { Request, Response } from "express";
import Room from "../models/roomModel";

// Fetch all rooms with filtering and pagination
export const getRooms = async (req: Request, res: Response) => {
  try {
    const { name, price, available, page = 1, limit = 10 } = req.query;

    const query: any = {};

    if (name) {
      query.name = { $regex: new RegExp(name as string, "i") };
    }

    if (price) {
      query.price = { $lte: parseFloat(price as string) };
    }

    if (available) {
      query.available = available === "true";
    }

    const rooms = await Room.find(query)
      .skip((parseInt(page as string) - 1) * parseInt(limit as string))
      .limit(parseInt(limit as string));

    const totalItems = await Room.countDocuments(query);

    res.json({
      success: true,
      data: rooms,
      pagination: {
        currentPage: parseInt(page as string),
        totalPages: Math.ceil(totalItems / parseInt(limit as string)),
        totalItems,
      },
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error", error });
  }
};
