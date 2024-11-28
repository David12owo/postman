import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      minLength: 3,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    age: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("users", userSchema);

export default User;
