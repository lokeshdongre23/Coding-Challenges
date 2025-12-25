import Table from "../models/tableSchema";
import { Request, Response } from "express";

interface TableInput {
  number: number;
  capacity: number;
  type: string;
}

// this method is to create the new table
const createtable = async (req: Request, res: Response) => {
  try {
    const body = req.body;
    const tables = new Table<TableInput>({
      number: body.number,
      capacity: body.capacity,
      type: body.type,
    });

    const saveTable = await tables.save();

    res.status(200).json(saveTable);
  } catch (erro) {
    console.log("Somthing went wrong...", erro);
    res.status(500).json({
      messsage: "somthings goes Wrong...",
    });
  }
};
const getTables = async (req: Request, res: Response) => {
  const allTable = await Table.find({});

  res.status(200).json(allTable);
};

export default { createtable, getTables };
