const bankService = require("./bankService");

exports.transfer = (req, res) => {

  try {

    const { from, to, amount } = req.body;

    const result = bankService.transferMoney(
      from,
      to,
      Number(amount)
    );

    res.json(result);

  } catch (err) {
    res.status(400).json({
      error: err.message
    });
  }
};