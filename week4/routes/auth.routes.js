const { verifySignUp } = require("../middleware");
const controller = require("../controllers/auth.controller");

module.exports = function(week4) {
  week4.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  week4.post(
    "/api/auth/signup",
    [
      verifySignUp.checkDuplicateUsername,
      verifySignUp.checkRolesExisted
    ],
    controller.signup
  );

  week4.post("/api/auth/signin", controller.signin);
};