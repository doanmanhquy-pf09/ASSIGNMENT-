var Cart = require("../models/cart");
var Product = require("../models/product");

/* GET home page. */
class ProductController {
  homePage(req, res, next) {
    var successMsg = req.flash("success")[0];
    Product.find(function (err, docs) {
      var productChunks = [];
      // var chunkSize = 3;
      // for (var i = 0; i < docs.length; i += chunkSize) {
      //   productChunks.push(docs.slice(i, i + chunkSize));
      // }
      for (var i = 0; i < docs.length; i++) {
        productChunks.push(docs.slice(i, i + 1));
      }
      res.render("shop/index", {
        title: "TiKA",
        products: productChunks,
        successMsg: successMsg,
        noMessages: !successMsg,
      });
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

  checkout(req, res, next) {
    if (!req.session.cart) {
      return res.redirect("/shopping-cart");
    }
    var cart = new Cart(req.session.cart);
    res.render("shop/checkout", {csrfToken: req.csrfToken(), total: cart.totalPrice });
  }

  checkoutP(req, res, next) {
    if (!req.session.cart) {
      return res.redirect("/shopping-cart");
    }
    var cart = new Cart(req.session.cart);

    req.flash("success", "Successfully bought product!");
    req.cart = null;
    res.redirect("/");
  }
}
module.exports = new ProductController();
