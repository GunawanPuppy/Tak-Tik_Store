import { Products } from "@/interface/product";
import DB from "../config/mongo";

class ProductModel {
  static async findAll() {
    const data = DB.collection<Products>("products").find().toArray();
    return data;
  }
}

export default ProductModel;
