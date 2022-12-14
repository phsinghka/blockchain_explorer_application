const express = require('express');

const { getHistory, createTransaction } = require('./transactions.controllers');

const transactionRouter = express.Router();

transactionRouter.get('/history', getHistory);
transactionRouter.post('/transfer', createTransaction);

module.exports = transactionRouter;
