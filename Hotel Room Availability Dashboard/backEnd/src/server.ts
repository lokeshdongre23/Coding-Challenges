import express from "express";
import roomRouter from "./routers/roomRouter";
import dbConnection from "./dbConect/dbConnection";

const app = express();
const PORT = 3000;

dbConnection();
app.use(express.json());

// Routes
app.use("/rooms", roomRouter);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
