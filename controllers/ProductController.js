var Cart = require("../models/cart");
var Product = require("../models/product");
var Order = require("../models/order");

/* GET home page. */
class ProductController {
  homePage(req, res, next) {
    var successMsg = req.flash("success")[0];
    Product.find(function (err, docs) {
      var productChunks = [];
      var ctg = [];
      // var chunkSize = 3;
      // for (var i = 0; i < docs.length; i += chunkSize) {
      //   productChunks.push(docs.slice(i, i + chunkSize));
      // }
      for (var i = 0; i < docs.length; i++) {
        var check = 0;
        productChunks.push(docs.slice(i, i + 1));
        for (var j = 0; j < ctg.length; j++) {
          if (docs[i].cate === ctg[j]) {
            check = 1;
            break;
          }
        }
        if (check === 0) {
          ctg.push(docs[i].cate);
        }
      }
      res.render("partials/product", {
        title: "Đây là Title",
        cate: ctg,
        products: productChunks,
        successMsg: successMsg,
        noMessages: !successMsg,
      });
    });
  }

  productDetail(req, res, next) {
    var productId = req.params.id;

    Product.findById(productId, function (err, product) {
      if (err) {
        return res.redirect("/");
      }
      console.log(product);
      res.render("partials/product-detail", { product: product });
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
      return res.redirect("/");
    });
  }

  reduce(req, res, next) {
    var productId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});
    cart.reduceByOne(productId);
    req.session.cart = cart;
    res.redirect("/shopping-cart");
  }

  remove(req, res, next) {
    var productId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});
    cart.removeItem(productId);
    req.session.cart = cart;
    res.redirect("/shopping-cart");
  }

  shoppingCart(req, res, next) {
    if (!req.session.cart) {
      return res.render("shop/shopping-cart", { products: null });
    }
    var cart = new Cart(req.session.cart);
    res.render("shop/shopping-cart", {
      products: cart.generateArray(),
      csrfToken: req.csrfToken(),
      totalPrice: cart.totalPrice,
    });
  }

  checkoutP(req, res, next) {
    if (!req.session.cart) {
      return res.redirect("/shopping-cart");
    }
    var cart = new Cart(req.session.cart);
    var order = new Order({
      user: req.user,
      cart: cart,
      address: req.body.address,
      name: req.body.name,
    });
    order.save(function (err, result) {
      req.flash("success", "Successfully bought product!");
      req.session.cart = null;
      res.redirect("/");
    });
  }
}
module.exports = new ProductController();
