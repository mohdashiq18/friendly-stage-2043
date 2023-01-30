const mongoose = require("mongoose");

const producutSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  description: { type: String },
  image: { type: String },
  price: { type: Number, required: true },
  ofPrice: { type: Number },
  quantity: { type: Number, required: true },
});

const ProductModel = mongoose.model("product", producutSchema);

module.exports = {
  ProductModel,
};

{
  "name", "category", "description", "image", "price", "ofPrice", "quantity";
}
