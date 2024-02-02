const express = require("express");
const asyncHandler = require("express-async-handler");
const router = express.Router();

router.route("/").get((req, res) => {
  res.status(200).json({
    message: "Api is Live",
    port: process.env.PORT,
  });
});

router.route("/ping").get((req, res) => {
  res.status(200).json({ message: "Pong 🏓" });
});

module.exports = router;
