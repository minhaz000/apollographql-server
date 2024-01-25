import mongoose from "mongoose";
const User = new mongoose.Schema(
  {
    title: String,
    body: String,
    author: String,
  },
  { versionKey: false }
);
const Model = mongoose.model("post", User);

export default Model;
