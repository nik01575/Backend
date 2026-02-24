const express = require("express");
const app = express();

const connectDB = require("./db");
const testRoute = require("./routes/test");

// Connect DB FIRST
connectDB();

app.use(express.json());

// Routes AFTER DB
app.use("/test", testRoute);

app.listen(3000, () => {
  console.log("Server started on port 3000 ✅");
});