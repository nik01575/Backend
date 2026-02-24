const express = require("express");
const app = express();

const connectDB = require("./db");
const testRoute = require("./routes/test");

app.use(express.json());

// Connect DB
connectDB();

// Routes
app.use("/test", testRoute);

// Home route (test)
app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});

app.listen(3000, () => {
  console.log("Server started on port 3000 ✅");
});