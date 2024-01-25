import mongoose from "mongoose";
const pro = new mongoose.Schema(
  {
    title: String,
    des: String,
    price: String,
  },
  { versionKey: false }
);
const Model = mongoose.model("product", pro);

export default Model;
