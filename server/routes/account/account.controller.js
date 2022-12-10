const Address = require('../../models/address.model');
const Transaction = require('../../models/transaction.model');

var Web3 = require('web3');
var web3 = new Web3('ws://127.0.0.1:8545/');

const getAddresses = async (req, res) => {
  //Using HardHat Node
  const addresses = await web3.eth.getAccounts();

  //Using MongoDB
  //const allAddresses = await Address.find({}, { _id: 0, __v: 0 });
  res.status(200).json(addresses);
};

const getBalance = async (req, res) => {
  const whichAddress = req.params.address;

  // const transactions = await Transaction.find({
  //   $or: [{ receiver: whichAddress }, { sender: whichAddress }],
  // });

  // const plusTransactions = await transactions.filter(
  //   (trans) => trans.receiver === whichAddress
  // );

  // const minusTransactions = await transactions.filter(
  //   (trans) => trans.sender === whichAddress
  // );

  // const plusSum = await plusTransactions.reduce(
  //   (total, obj) => total + obj.amount,
  //   0
  // );

  // const minusSum = await minusTransactions.reduce(
  //   (total, obj) => total + obj.amount,
  //   0
  // );

  // const newBalance = plusSum - minusSum;

  const balance = await web3.eth.getBalance(
    '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266'
  );
  return res.status(200).json({
    address: whichAddress,
    balance: balance,
  });
};

module.exports = {
  getAddresses,
  getBalance,
};
