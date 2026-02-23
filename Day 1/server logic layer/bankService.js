const users = require("./userModel");

exports.transferMoney = (from, to, amount) => {

  const sender = users.find(u => u.id === from);
  const receiver = users.find(u => u.id === to);

  if (!sender || !receiver) {
    throw new Error("User not found");
  }

  if (sender.balance < amount) {
    throw new Error("Insufficient balance");
  }

  sender.balance -= amount;
  receiver.balance += amount;

  return {
    message: "Transfer Successful",
    sender,
    receiver
  };
};