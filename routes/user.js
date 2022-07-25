var express = require("express");
var router = express.Router();
var csrf = require("csurf");
var userController = require("../controllers/UserController");

var csrfProtection = csrf();
router.use(csrfProtection);

router.get("/profile", userController.isLoggedIn, userController.userProfile);

router.get("/logout", userController.isLoggedIn, userController.userLogout);

router.use("/", userController.notLoggedIn, userController.userNotLoggedIn);

router.get("/signup", userController.userSignup);

router.post("/signup", userController.userSignupPassport);

router.get("/signin", userController.userSignin);

router.post("/signin", userController.userSigninPassport);

module.exports = router;
