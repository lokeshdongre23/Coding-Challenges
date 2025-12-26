import { Document, model, Schema, Types } from "mongoose";

interface Ireservation extends Document {
  table: Types.ObjectId;
  guestName: string;
  guestCount: number;
  date: Date;
}

const reservationSchema = new Schema<Ireservation>({
  table: {
    type: Schema.Types.ObjectId, //refernec of _id store here
    ref: "table",
    required: true,
  },
  guestName: {
    type: String,
    required: true,
  },
  guestCount: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});
/*
useCase: use to check conflig
Purpose: it will check that if there is
         reservation oif the perticular table 
         on perticulart datea and time 
*/

reservationSchema.index({ table: 1, date: 1 }, { unique: true });

export const reservationModel = model<Ireservation>(
  "reservations",
  reservationSchema
);
