import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReceiptBlock from '../receipt-block/receipt-block.component';

var Web3 = require('web3');
var web3 = new Web3('ws://127.0.0.1:8545/');

const TransferBlock = ({ transferData }) => {
  const [amountValue, setAmountValue] = useState('');
  const [receiptData, setReceiptData] = useState(null);
  const { from, to } = transferData;

  const sendTransaction = async (source, destination, value) => {
    console.log(`sendTransaction method called..`);
    return web3.eth
      .sendTransaction({
        from: source,
        to: destination,
        value: value,
      })
      .then((receipt) => {
        console.log(receipt);
        return receipt;
      });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await sendTransaction(from, to, amountValue);

    const newReceiptData = {
      txHash: response.transactionHash,
      status: response.status ? 'SUCCESS' : 'FAILED',
      timestamp: new Date(),
      sender: response.from,
      receiver: response.to,
      amount: amountValue,
      gasUsed: response.gasUsed,
    };
    await axios.post(
      'http://localhost:8000/transaction/transfer',
      newReceiptData
    );
    console.log(response);
    setReceiptData(newReceiptData);
  };

  const handleChange = (event) => {
    setAmountValue(event.target.value);
  };

  return (
    <div>
      <div className='transaction-container'>
        <p>
          <b>From: </b>
          {from}
        </p>
        <p>
          <b>To: </b>
          {to}
        </p>
        <form onSubmit={handleSubmit}>
          <label>
            <b>Amount:</b>
          </label>
          <input
            required
            type='number'
            name='amount'
            value={amountValue}
            onChange={handleChange}
          />
          <br></br>
          <br></br>
          <button type='submit' className='btn btn-info'>
            Transfer
          </button>
        </form>
      </div>
      {receiptData ? <ReceiptBlock receiptData={receiptData} /> : <div></div>}
    </div>
  );
};

export default TransferBlock;
