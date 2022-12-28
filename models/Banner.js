import mongoose from "mongoose";

const BannerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    price: {
      type: Number,
    },
    smallText: {
      type: String,
    },
    midText: {
      type: String,
    },
    category: {
      type: String,
      enum: ["header", "footer"],
    },
  },
  { timestamps: true }
);

export default mongoose.model("banner", BannerSchema);
