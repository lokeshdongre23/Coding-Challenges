import mongoose, { Document, model, Schema } from "mongoose";

interface InTable extends Document {
  number: number;
  capacity: number;
  type: string;
}

const TableSchema = new Schema<InTable>({
  number: {
    type: Number,
    required: true,
    unique: true,
  },
  capacity: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
});

const Table = mongoose.model("table", TableSchema);

export default Table;
