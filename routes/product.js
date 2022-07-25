var express = require("express");
var router = express.Router();
var csrf = require("csurf");
var productController = require("../controllers/ProductController");
var userController = require("../controllers/UserController");

var csrfProtection = csrf();
router.use(csrfProtection);
/* GET home page. */
router.get("/", productController.homePage);

router.get("/product-detail/:id", productController.productDetail);

router.get(
  "/add-to-cart/:id",
  userController.isLoggedIn,
  productController.addToCart
);

router.get("/reduce/:id", userController.isLoggedIn, productController.reduce);

router.get("/remove/:id", userController.isLoggedIn, productController.remove);

router.get(
  "/shopping-cart",
  userController.isLoggedIn,
  productController.shoppingCart
);

router.post(
  "/checkout",
  userController.isLoggedIn,
  productController.checkoutP
);

module.exports = router;
