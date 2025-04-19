const express = require("express");
const router = express.Router();
const contactForm = require('../controllers/contact-controller')
const validate = require("../middlewares/validate-middleware")
const ContactMessageSchema=require("../validators/contact-validation")

router.route("/contact").post(validate(ContactMessageSchema),contactForm);

module.exports=router;