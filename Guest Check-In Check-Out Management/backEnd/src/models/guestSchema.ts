import mongoose, { Schema, Document } from "mongoose";

export interface IGuest extends Document {
  name: string;
  status: "checked-in" | "checked-out";
  checkInTime?: Date;
  checkOutTime?: Date;
}

const GuestSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    status: {
      type: String,
      enum: ["checked-in", "checked-out"],
      default: "checked-out",
    },
    checkInTime: { type: Date },
    checkOutTime: { type: Date },
  },
  { timestamps: true }
);

export default mongoose.model<IGuest>("Guest", GuestSchema);
