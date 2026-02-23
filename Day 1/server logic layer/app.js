const express = require("express");
const app = express();

const bankRoutes = require("./bankRoutes");

// Body parser
app.use(express.json());

// Routes
app.use("/api", bankRoutes);

app.listen(3000, () => {
  console.log("Bank server running on port 3000");
});