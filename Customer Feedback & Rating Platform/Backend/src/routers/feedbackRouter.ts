import express from "express";
import {
  submitFeedback,
  getAverageRating,
} from "../controllers/feedbackController";

const router = express.Router();

// Route to submit feedback
router.post("/submit", async (req, res) => {
  try {
    const feedback = await submitFeedback(req.body);
    res
      .status(201)
      .json({ message: "Feedback submitted successfully.", feedback });
  } catch (error) {
    console.error("Error submitting feedback:", error);
    res
      .status(500)
      .json({ error: "An error occurred while submitting feedback." });
  }
});

// Route to get average rating
router.get("/analytics/average-rating", async (req, res) => {
  try {
    const averageRating = await getAverageRating();
    res.status(200).json({ averageRating });
  } catch (error) {
    console.error("Error retrieving average rating:", error);
    res
      .status(500)
      .json({ error: "An error occurred while retrieving average rating." });
  }
});

export default router;
