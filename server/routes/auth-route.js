const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth-controller");
const validate = require("../middlewares/validate-middleware")
const {signupSchema,loginSchema}=require("../validators/auth-validation")



router.route("/register").post(validate(signupSchema),authController.register);

router.route("/login").post(validate(loginSchema),authController.login);




module.exports=router;