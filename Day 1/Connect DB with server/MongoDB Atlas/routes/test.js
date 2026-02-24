const express = require("express");
const router = express.Router();

const User = require("../models/Users");

router.get("/add", async (req, res) => {

  const user = new User({
    name: "Nikhil",
    balance: 5000
  });

  await user.save();

  res.send("User Saved ✅");
});

module.exports = router;