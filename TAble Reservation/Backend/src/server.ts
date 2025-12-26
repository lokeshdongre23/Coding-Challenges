// console.log("hello frm server");

import express, { Request, Response } from "express";
import dbConnection from "./dbConnection/dbConnect";
import tableCreRouts from "./Routes/tableCreRouts";
import reservation from "./Routes/reservationRout";
import { json } from "body-parser";
const app = express();
dbConnection();

const port = 9000;
app.use(json());

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome");
});

app.use("/tables", tableCreRouts);

app.use("/reservation", reservation);

app.listen(port, () => {
  console.log(`Server Started on ${port}`);
});
