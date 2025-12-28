import mongoose, { Schema, Document } from "mongoose";

export interface IFeedback extends Document {
  customerName: string;
  rating: number;
  comments: string;
  createdAt: Date;
}

const FeedbackSchema: Schema = new Schema({
  customerName: { type: String, required: true },
  rating: { type: Number, required: true, min: 1, max: 5 },
  comments: { type: String },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model<IFeedback>("Feedback", FeedbackSchema);
