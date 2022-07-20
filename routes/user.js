var express = require("express");
var router = express.Router();
var csrf = require("csurf");
var userController = require("../controllers/UserController");

var csrfProtection = csrf();
router.use(csrfProtection);

router.get("/profile", userController.isLoggedIn, userController.userProfile);

router.get("/logout", userController.isLoggedIn, userController.userLogout);

router.use("/", userController.notLoggedIn, userController.userNotLoggedIn);

router.post("/signup", userController.userSignupPassport);

router.get("/signup", userController.userSignup);

router.post("/signin", userController.userSigninPassport);

router.get("/signin", userController.userSignin);

module.exports = router;
