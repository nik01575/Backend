const express = require("express");
const router = express.Router();

const User = require("../models/User");

// Test Route: Add Data
router.get("/add", async (req, res) => {

  const user = new User({
    name: "Nikhil",
    age: 22
  });

  await user.save();

  res.send("User Added ✅");
});

module.exports = router;