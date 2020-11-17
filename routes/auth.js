const express = require("express");
const { check, body } = require("express-validator/check");
const authController = require("../controllers/auth");
const router = express.Router();
const User = require("../models/user");

router.get("/login", authController.getLogin);

router.get("/signup", authController.getSignup);

router.post("/login", authController.postLogin);

/*
    Adding extra middleware for validation
    Check for field's name in the <input> tag
    in the view folder

    withMessage allow you to customize error message
    .custom allow you to customize error and error message

    See docs: 
    https://express-validator.github.io/docs/
    to understand more about express validator
*/
router.post(
  "/signup",
  [
    check("email")
      .isEmail()
      .withMessage("Please enter a valid email")
      .custom((value, { req }) => {
        return User.findOne({ email: value }).then((userDoc) => {
          if (userDoc) {
            return Promise.reject(
              "Email exists already, please pick a different one "
            );
          }
        });
      }),
    body("password", "Password should be from 6 to 15 characters")
      .isLength({ min: 6, max: 15 })
      .isAlphanumeric(),
    body("confirmPassword").custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error("Password and Confirm Password are not matching !");
      }
      return true;
    }),
  ],
  authController.postSignup
);

router.post("/logout", authController.postLogout);

router.get("/reset", authController.getReset);

router.post("/reset", authController.postReset);

router.get("/reset/:token", authController.getNewPassword);

router.post("/new-password", authController.postNewPassword);

module.exports = router;
