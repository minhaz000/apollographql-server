import mongoose from "mongoose";
const User = new mongoose.Schema(
  {
    username: String,
    email: String,
    password: String,
    profile_photo: String,
  },
  { versionKey: false }
);
const Model = mongoose.model("user", User);

export default Model;
