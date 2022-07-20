var Cart = require("../models/cart");
var Product = require("../models/product");

/* GET home page. */
class ProductController {
  homePage(req, res, next) {
    Product.find(function (err, docs) {
      var productChunks = [];
      var chunkSize = 3;
      for (var i = 0; i < docs.length; i += chunkSize) {
        productChunks.push(docs.slice(i, i + chunkSize));
      }
      res.render("shop/index", { title: "TiKA", products: productChunks });
    });
  }
  addToCart(req, res, next) {
    var productId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});

    Product.findById(productId, function (err, product) {
      if (err) {
        return res.redirect("/");
      }
      cart.add(product, product.id);
      req.session.cart = cart;
      console.log(req.session.cart);
      res.redirect("/");
    });
  }

  shoppingCart(req, res, next) {
    if (!req.session.cart) {
      return res.render("shop/shopping-cart", { products: null });
    }
    var cart = new Cart(req.session.cart);
    res.render("shop/shopping-cart", {
      products: cart.generateArray(),
      totalPrice: cart.totalPrice,
    });
  }
}
module.exports = new ProductController();
