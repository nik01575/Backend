const express = require("express");
const router = express.Router();

const User = require("../models/User");

// Add user
router.get("/add", async (req, res) => {

  const user = new User({
    name: "Nikhil",
    age: 22
  });

  await user.save();

  res.send("User Added ✅");
});

module.exports = router;