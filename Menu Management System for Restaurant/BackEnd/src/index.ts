import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import menuRoutes from "./routes/menu";
import { basicAuthMiddleware } from "./middleware/auth";
import { connectDB } from "./db/dbConnection";

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/menu", basicAuthMiddleware, menuRoutes);

app.listen(5000, () => console.log("Server running on http://localhost:5000"));
