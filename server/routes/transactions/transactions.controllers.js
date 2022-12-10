const Transaction = require('../../models/transaction.model');

var Web3 = require('web3');
var web3 = new Web3('ws://127.0.0.1:8545/');

const getHistory = async (req, res) => {
  try {
    //MONGODB
    const transaction = await Transaction.find({}, { __v: 0 }).sort({
      timestamp: 'descending',
    });
    res.status(200).json(transaction);
  } catch (error) {
    throw new Error('No Transaction Found', error);
  }
};

const createTransaction = async (req, res) => {
  try {
    //Web - Send Transaction

    const transaction = await Transaction.create(req.body);
    res.status(200).json(transaction);
  } catch (error) {
    throw new Error('Error in create Transaction ! Please Try Again');
  }
};

module.exports = { getHistory, createTransaction };
