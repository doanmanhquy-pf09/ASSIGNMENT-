var express = require("express");
var router = express.Router();
var csrf = require("csurf");
var productController = require("../controllers/productController");
var userController = require("../controllers/UserController");

var csrfProtection = csrf();
router.use(csrfProtection);
/* GET home page. */
router.get("/", productController.homePage);

router.get(
  "/add-to-cart/:id",
  userController.isLoggedIn,
  productController.addToCart
);

router.get(
  "/shopping-cart",
  userController.isLoggedIn,
  productController.shoppingCart
);

module.exports = router;
