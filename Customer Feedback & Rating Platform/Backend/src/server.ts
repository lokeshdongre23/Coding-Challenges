import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/connection";
import feedbackRouter from "./routers/feedbackRouter";

dotenv.config();

const app = express();

// Middleware
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use("/feedback", feedbackRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
