const express = require("express");
const { check } = require("express-validator/check");

const authController = require("../controllers/auth");

const router = express.Router();

router.get("/login", authController.getLogin);

router.get("/signup", authController.getSignup);

router.post("/login", authController.postLogin);

/*
    Adding extra middleware for validation
    Check for field's name in the <input> tag
    in the view folder

    withMessage allow you to customize error message
    .custom allow you to customize error and error message
*/
router.post(
  "/signup",
  check("email")
    .isEmail()
    .withMessage("Please enter a valid email")
    .custom((value, { req }) => {
      if (value === "test@gmail.com") {
        throw new Error("This email address is forbidden");
      }
      return true;
    }),
  authController.postSignup
);

router.post("/logout", authController.postLogout);

router.get("/reset", authController.getReset);

router.post("/reset", authController.postReset);

router.get("/reset/:token", authController.getNewPassword);

router.post("/new-password", authController.postNewPassword);

module.exports = router;
