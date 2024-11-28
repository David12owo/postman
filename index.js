import "dotenv/config";

import express from "express";
import mongoose from "mongoose";

const app = express();
const PORT = 3000;

import userRoutes from "./routes/userRoutes.js";

// To allow us extract thr properties that were added to the body of the request
app.use(express.json());

// connect to all the routes defined in the userRoutes.js
app.use("/api/v1/", userRoutes);

// default route
app.get("/api/v1", (req, res) => {
  res.status(200).send("Hello World");
});

// A function to connect to mongodb database
async function connectToDatabase() {
  try {
    await mongoose.connect(process.env.MONGODB_CONNECTION_STRING);
    console.log("Connected to MongoDB");
    console.log("server running on port:3000");
  } catch (error) {
    console.log(error);
  }
}

app.listen(PORT, () => {
  connectToDatabase();
});
