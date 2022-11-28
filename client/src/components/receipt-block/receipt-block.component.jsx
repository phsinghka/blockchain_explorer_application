import React from 'react';
import moment from 'moment';

const ReceiptBlock = ({ receiptData }) => {
  return (
    <div className='transaction-container'>
      <p>
        <b>Transaction Hash:</b> {receiptData.txHash}
      </p>
      <p>
        <b>Status:</b> {receiptData.status}
      </p>
      <p>
        <b>Timestamp:</b> {moment(receiptData.timestamp).format('lll')}
      </p>
      <p>
        <b>From:</b> {receiptData.sender}
      </p>
      <p>
        <b>To:</b> {receiptData.receiver}
      </p>
      <p>
        <b>Amount :</b> {receiptData.amount}
      </p>
      <p>
        <b>Gas Used:</b> {receiptData.gasUsed}
      </p>
    </div>
  );
};

export default ReceiptBlock;
