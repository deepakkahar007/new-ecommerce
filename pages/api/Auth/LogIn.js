import User from "../../../models/User";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const LogIn = async (req, res) => {
  const { email, password } = req.body;
  if (req.method === "POST") {
    try {
      await mongoose.connect(process.env.MONGO_URL);
      if (!email && !password) {
        res.status(404).json("please provide email and password");
      } else {
        const user = await User.findOne({ email });
        const isMatch = await bcrypt.compare(password, user.password);

        let token = jwt.sign(
          { email: email, name: user.name },
          process.env.JWT_SECRET,
          {
            expiresIn: process.env.JWT_EXPIRY,
          }
        );

        res.status(200).json({ success: "log in successfully", token });
      }
    } catch (error) {
      console.error(error);

      res.status(500).json("the error is ", error);
    }
  } else {
    res.status(400).json("this method is not allowed");
  }
};

export default LogIn;
