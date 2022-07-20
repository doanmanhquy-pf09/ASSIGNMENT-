var Product = require("../models/Product");
var mongoose = require("mongoose");
require("../config/dbConnect");
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
    title: "A",
    description: "Awesome Gaawddame!!!",
    price: 10,
  }),
  new Product({
    imagePath: "https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png",
    title: "V",
    description: "wf ewfGame!!!",
    price: 10,
  }),
  new Product({
    imagePath: "https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png",
    title: "D",
    description: "Awesomfewfewfe Game!!!",
    price: 10,
  }),
  new Product({
    imagePath: "https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png",
    title: "E",
    description: "Awesowefme Gwefame!!!",
    price: 10,
  }),
  new Product({
    imagePath: "https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png",
    title: "G",
    description: "Awesofewfme Gfwefewame!!!",
    price: 10,
  }),
  new Product({
    imagePath: "https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png",
    title: "G",
    description: "Aafswesomeasaf afsfGame!!!",
    price: 10,
  }),
  new Product({
    imagePath: "https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png",
    title: "Q",
    description: "Aafwesome Gamefdf!!!",
    price: 10,
  }),
  new Product({
    imagePath: "https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png",
    title: "H",
    description: "Awesasdfaome Gadsfame!!!",
    price: 10,
  }),
  new Product({
    imagePath: "https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png",
    title: "J",
    description: "Awesome Game!!!",
    price: 10,
  }),
  new Product({
    imagePath: "https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png",
    title: "B",
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
