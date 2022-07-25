var usersRouter = require("./user");
var productsRouter = require("./product");

function indexRouter(app) {
  app.use("/user", usersRouter);
  app.use("/", productsRouter);
}

module.exports = indexRouter;
