import Feedback from "../models/feedback";

// Submit feedback
export const submitFeedback = async (data: {
  customerName: string;
  rating: number;
  comments?: string;
}) => {
  const feedback = new Feedback(data);
  return await feedback.save();
};

// Get average rating
export const getAverageRating = async () => {
  const result = await Feedback.aggregate([
    {
      $group: {
        _id: null,
        averageRating: { $avg: "$rating" },
      },
    },
  ]);
  return result[0]?.averageRating || 0;
};
