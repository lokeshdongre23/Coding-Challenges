import mongoose, { Schema, Document } from "mongoose";

export interface IRoom extends Document {
  name: string;
  price: number;
  available: boolean;
}

const RoomSchema: Schema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  available: { type: Boolean, required: true },
});

export default mongoose.model<IRoom>("Room", RoomSchema);
