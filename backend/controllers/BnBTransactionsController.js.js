const BnBTransactionService = require('../services/BnBTransactionServices');

exports.getBnbTransactions = async (req, res) => {
  try {
    const transactions = await BnBTransactionService.fetchBnbTransactions();
    res.status(200).json(transactions.data.data);
  } catch (error) {
    console.error("Error fetching BNB transactions:", error);
    res.status(500).json({ error: "Failed to fetch BNB transactions." });
  }
};