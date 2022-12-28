import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
  },
  image: {
    type: String,
  },
  desc: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
  },
  qty: {
    type: Number,
  },
});

mongoose.models = {};
export default mongoose.model("product", ProductSchema);
