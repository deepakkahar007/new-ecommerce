import Product from "../../../models/Product";
import mongoose from "mongoose";

const Delete = async (req, res) => {
  const { _id } = req.query;
  try {
    if (req.method === "DELETE") {
      await mongoose.connect(process.env.MONGO_URL);
      const r = await Product.findByIdAndDelete(_id);
      if (!r) {
        res.status(400).json(`this id not found: ${_id}`);
      }
      res.status(200).json("successfully deleted");
    } else {
      res.status(400).json("this method is not allowed");
    }
  } catch (error) {
    console.log(error);
  }
};

export default Delete;
