const users = require("./userModel");

// Get All Users
exports.getUsers = (req, res) => {
  res.json(users);
};

// Get Single User
exports.getUserById = (req, res) => {
  const id = req.params.id;

  const user = users.find(u => u.id == id);

  if(user){
    res.json(user);
  } else {
    res.status(404).json({ message: "User not found" });
  }
};