const express = require('express');
const { getBnbTransactions } = require('../controllers/BnBTransactionsController.js');
const router = express.Router();

router.get('/bsc', getBnbTransactions);

module.exports = router;
