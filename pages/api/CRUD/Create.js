import Product from "../../../models/Product";
import mongoose from "mongoose";

const CreateProduct = async (req, res) => {
  try {
    if (req.method === "POST") {
      await mongoose.connect(process.env.MONGO_URL);
      let p = await Product.create({ ...req.body });
      res.status(201).json({ msg: "successfully created ", data: p });
    } else {
      res.status(400).json("this method is not allowed");
    }
  } catch (error) {
    res.status(400).json("the error is", error);
  }
};

export default CreateProduct;
