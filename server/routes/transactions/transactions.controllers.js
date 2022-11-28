const Transaction = require('../../models/transaction.model');

const getHistory = async (req, res) => {
  try {
    const transaction = await Transaction.find({}, { __v: 0 });
    res.status(200).json(transaction);
  } catch (error) {
    throw new Error('No Transaction Found');
  }
};

const createTransaction = async (req, res) => {
  try {
    const transaction = await Transaction.create(req.body);
    res.status(200).json(transaction);
  } catch (error) {
    throw new Error('Error in create Transaction ! Please Try Again');
  }
};

module.exports = { getHistory, createTransaction };
