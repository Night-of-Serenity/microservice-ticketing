import { app } from "./app";
import mongoose from "mongoose";

const start = async () => {
  // varify environment JWT_KEY
  if (!process.env.JWT_KEY) {
    throw new Error("JWT_KEY must be defined");
  }

  try {
    await mongoose.connect("mongodb://auth-mongo-srv:27017/auth");
    console.log("Connecting to MongoDB");
  } catch (err) {
    console.error(err);
  }
};

app.listen(3000, () => {
  console.log("Listeing on port 3000!!!");
});

start();
