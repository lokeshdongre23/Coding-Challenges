import mongoose = require("mongoose");

const dbConnection = async () => {
  await mongoose
    .connect("mongodb://localhost:27017/checkinout")
    .then(() => {
      console.log("DataBAse IS connected.................");
    })
    .catch((error) => {
      console.error("Somthin Goes Wrong..", error);
    });
};

export default dbConnection;
