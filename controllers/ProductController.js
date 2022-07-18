var Product = require("../models/Product");
var mongoose = require("mongoose");
const { exists } = require("../models/Product");
async function connect() {
  try {
    await mongoose.connect(
      "mongodb+srv://quy123:quy123@dbmanager.jheap.mongodb.net/test"
    );
    console.log("Kết nối thành công!");
  } catch (error) {
    console.log("Kết nối không thành công!");
  }
}
connect();
//-- 1 sản phẩm
// var product = new Product({
//     imagePath: 'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
//     title: 'Gothic Video Game',
//     description: 'Awesome Game!!!',
//     price: 10
// });

//-- Nhiều sản phẩm
var products = [
  new Product({
    imagePath: "https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png",
    title: "Gothic Video Game",
    description: "Awesome Game!!!",
    price: 10,
  }),
  new Product({
    imagePath: "https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png",
    title: "Gothic Video Game",
    description: "Awesome Game!!!",
    price: 10,
  }),
  new Product({
    imagePath: "https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png",
    title: "Gothic Video Game",
    description: "Awesome Game!!!",
    price: 10,
  }),
  new Product({
    imagePath: "https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png",
    title: "Gothic Video Game",
    description: "Awesome Game!!!",
    price: 10,
  }),
  new Product({
    imagePath: "https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png",
    title: "Gothic Video Game",
    description: "Awesome Game!!!",
    price: 10,
  }),
  new Product({
    imagePath: "https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png",
    title: "Gothic Video Game",
    description: "Awesome Game!!!",
    price: 10,
  }),
  new Product({
    imagePath: "https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png",
    title: "Gothic Video Game",
    description: "Awesome Game!!!",
    price: 10,
  }),
  new Product({
    imagePath: "https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png",
    title: "Gothic Video Game",
    description: "Awesome Game!!!",
    price: 10,
  }),
  new Product({
    imagePath: "https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png",
    title: "Gothic Video Game",
    description: "Awesome Game!!!",
    price: 10,
  }),
  new Product({
    imagePath: "https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png",
    title: "Gothic Video Game",
    description: "Awesome Game!!!",
    price: 10,
  }),
];

var done = 0;
for (var i = 0; i < products.length; i++) {
  //Lưu sản phẩm vào csdl
  products[i].save(function (err, result) {
    done++;
    if (done === products.length) {
      exit();
    }
  });
}
function exit() {
  mongoose.disconnect();
}
