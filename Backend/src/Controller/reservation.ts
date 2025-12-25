import { Request, Response } from "express";
import { reservationModel } from "../models/reservationSchema";
import Table from "../models/tableSchema";

const bookTable = async (req: Request, res: Response) => {
  try {
    const table = await Table.findOne({ number: req.body.tableNumber });
    console.log(table);
    if (!table) {
      return res.status(404).json({ message: "Table not found" });
    }
    const body = req.body;

    const BTable = new reservationModel({
      table: table._id,
      guestName: body.guestName,
      guestCount: body.guestCount,
      date: body.date,
    });

    const tableDetail = await BTable.save();
    res.status(200).json({
      message: "table booked",
      "table Detail": { tableDetail },
    });
  } catch (error: any) {
    if (error.code === 11000) {
      return res.status(400).json({
        message: "This table is already booked for this date & time",
      });
    } else {
      console.log("Error:", error);
    }
  }
};
const reservedTable = async (req: Request, res: Response) => {
  const resTable = await reservationModel.find({});
  res.status(200).json(resTable);
};
export default { bookTable, reservedTable };
