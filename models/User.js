import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "please provide Name"],
    },
    email: {
      type: String,
      required: [true, "please provide Email"],
      unique: [true, "please provide a unique Email"],
    },
    password: {
      type: String,
      required: [true, "please proide Password"],
    },
  },
  { timestamps: true }
);

export default mongoose.models.user || mongoose.model("user", UserSchema);
