const express = require("express");
const router = express.Router();

const bankController = require("./bankController");

router.post("/transfer", bankController.transfer);

module.exports = router;