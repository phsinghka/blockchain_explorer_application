const Address = require('../../models/address.model');
const Transaction = require('../../models/transaction.model');

const getAddresses = async (req, res) => {
  const allAddresses = await Address.find({}, { _id: 0, __v: 0 });
  res.status(200).json(allAddresses);
};

const getBalance = async (req, res) => {
  const whichAddress = req.params.address;

  const transactions = await Transaction.find({
    $or: [{ receiver: whichAddress }, { sender: whichAddress }],
  });

  const plusTransactions = await transactions.filter(
    (trans) => trans.receiver === whichAddress
  );

  const minusTransactions = await transactions.filter(
    (trans) => trans.sender === whichAddress
  );

  const plusSum = await plusTransactions.reduce(
    (total, obj) => total + obj.amount,
    0
  );

  const minusSum = await minusTransactions.reduce(
    (total, obj) => total + obj.amount,
    0
  );

  const newBalance = plusSum - minusSum;
  return res.status(200).json({
    address: whichAddress,
    balance: newBalance,
  });
};

module.exports = {
  getAddresses,
  getBalance,
};
