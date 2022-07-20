var usersRouter = require("./user");
var cartsRouter = require("./cart");

function indexRouter(app) {
  app.use("/user", usersRouter);
  app.use("/", cartsRouter);
}

module.exports = indexRouter;
