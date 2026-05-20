const express = require("express");
const { signupController, loginController } = require("../Controllers/userController");
const router = express.Router();

router.post("/auth/register",signupController);
router.post("/auth/login",loginController);

module.exports = router;
