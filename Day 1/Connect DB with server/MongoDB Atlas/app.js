const express = require("express");
const app = express();

const connectDB = require("./db");
const testRoute = require("./routes/test");

// Middleware
app.use(express.json());

// Connect Database
connectDB();

// Routes
app.use("/test", testRoute);

// Default Route (for testing server)
app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});

// Server Start
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} ✅`);
});