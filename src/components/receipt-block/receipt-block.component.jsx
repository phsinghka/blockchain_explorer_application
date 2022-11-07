import React, { useState, useEffect } from "react";

const ReceiptBlock = ({ receiptData }) => {
  const newReceiptData = {
    txHash: "",
    blockHash: "",
    blockNumber: "",
    from: "",
    to: "",
    gasUsed: "",
  };
  return (
    <div className="transaction-container">
      <p>
        <b>Transaction Hash:</b> {receiptData.txHash}
      </p>
      <p>
        <b>Block Hash:</b> {receiptData.blockHash}
      </p>
      <p>
        <b>Block Number:</b> {receiptData.blockNumber}
      </p>
      <p>
        <b>From:</b> {receiptData.from}
      </p>
      <p>
        <b>To:</b> {receiptData.to}
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
