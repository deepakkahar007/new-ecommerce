import Product from "../../../models/Product";
import Db from "../../../middleware/ConnectDb";

const GetAll = async (req, res) => {
  const p = await Product.find();
  res.status(200).json(p);
};
export default Db(GetAll);
