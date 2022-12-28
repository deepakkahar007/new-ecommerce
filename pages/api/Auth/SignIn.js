import User from "../../../models/User";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const SignIn = async (req, res) => {
  await mongoose.connect(process.env.MONGO_URL);
  const { name, email, password } = req.body;
  if (req.method === "POST") {
    try {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      const tempUser = { name, email, password: hashedPassword };
      let u = await User.create({ ...tempUser });
      res.status(200).json({ success: u });
    } catch (error) {
      console.error(error);
    }
  } else {
    res.status(400).json("this mehtod is not allowed");
  }
};
export default SignIn;
