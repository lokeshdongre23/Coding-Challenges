import mongoose from "mongoose";
import { error } from "node:console";

const dbConnection = async () => {
  mongoose
    .connect("mongodb://localhost:27017/hospitality")
    .then(() => {
      console.log("Data Base Connected Sucessfulllly............");
    })
    .catch((error) => {
      console.log("Somthing Went Wrong:", Error);
    });
};

export default dbConnection;
