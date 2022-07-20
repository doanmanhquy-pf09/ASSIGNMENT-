var User = require("../models/user");

var passport = require("passport");

class UserController {
  userProfile(req, res, next) {
    res.render("user/profile");
  }

  userLogout(req, res, next) {
    req.logout(function (err) {
      if (err) {
        return next(err);
      }
      res.redirect("/");
    });
  }

  userNotLoggedIn(req, res, next) {
    next();
  }

  userSignup(req, res, next) {
    var messages = req.flash("error");
    res.render("user/signup", {
      csrfToken: req.csrfToken(),
      messages: messages,
      hasErrors: messages.length > 0,
    });
  }

  userSignupPassport = passport.authenticate("local.signup", {
    failureRedirect: "/user/signup",
    successRedirect: "/user/profile",
    failureFlash: true,
  });

  userSignin(req, res, next) {
    var messages = req.flash("error");
    res.render("user/signin", {
      csrfToken: req.csrfToken(),
      messages: messages,
      hasErrors: messages.length > 0,
    });
  }

  userSigninPassport = passport.authenticate("local.signin", {
    failureRedirect: "/user/signin",
    successRedirect: "/user/profile",
    failureFlash: true,
  });

  //Xác thực phiên đăng nhập
  isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }
    res.redirect("/");
  }

  notLoggedIn(req, res, next) {
    if (!req.isAuthenticated()) {
      return next();
    }
    res.redirect("/");
  }
}
module.exports = new UserController();
