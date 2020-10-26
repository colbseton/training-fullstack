const authController = require("../controllers/auth.controller");

const authRoute = (app) => {
  app.post("/auth/signin", authController.signin);
  app.post("auth/signup", authController.signup);
};

module.exports = authRoute;