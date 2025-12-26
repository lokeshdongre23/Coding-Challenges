import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/dbConnection";
import guestRoutes from "./routers/guestRoute";
import cors from "cors";

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/guests", guestRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
