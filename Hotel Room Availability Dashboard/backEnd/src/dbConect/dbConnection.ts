import mongoose from "mongoose";

const dbConnection = async () => {
  mongoose
    .connect("mongodb://localhost:27017/hotelRoom")
    .then(() => {
      console.log("Data Base Connected Sucessfulllly............");
    })
    .catch((error) => {
      console.log("Somthing Went Wrong:", Error);
    });
};

export default dbConnection;
