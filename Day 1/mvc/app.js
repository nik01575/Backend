const express = require("express");
const app = express();

const userRoutes = require("./userRoutes");

app.use(express.json());

// Use Routes
app.use("/api", userRoutes);

app.listen(3000, ()=>{
  console.log("Server running on 3000");
});