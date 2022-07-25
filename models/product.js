var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var schema = new Schema({
  imagePath: [{ type: String, required: true }],
  // imagePath: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  cate: { type: String, required: true },
  // color: [{ type: String, required: true }],
  // size: [{ type: String, required: true }]
});

module.exports = mongoose.model("Product", schema);
