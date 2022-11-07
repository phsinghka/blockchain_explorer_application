import React, { useState, useEffect } from "react";
import ReceiptBlock from "../receipt-block/receipt-block.component";

const TransferBlock = ({ transferData }) => {
  const [amountValue, setAmountValue] = useState("");
  const [receiptData, setReceiptData] = useState(null);
  const { from, to } = transferData;

  const handleSubmit = (event) => {
    event.preventDefault();
    const newReceiptData = {
      txHash:
        "0x2767aabb9215f11f8ddc25cb0d43355632b8fe0f3a878cc5bda58763b739b6f5",
      blockHash: "0x506f776572656420627920626c6f58726f757465",
      blockNumber: "10",
      from: from,
      to: to,
      amount: amountValue,
      gasUsed: "21000",
    };
    setReceiptData(newReceiptData);
  };

  const handleChange = (event) => {
    setAmountValue(event.target.value);
  };

  return (
    <div>
      <div className="transaction-container">
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
            type="number"
            name="amount"
            value={amountValue}
            onChange={handleChange}
          />
          <br></br>
          <br></br>
          <button type="submit" className="btn btn-info">
            Transfer
          </button>
        </form>
      </div>
      {receiptData ? <ReceiptBlock receiptData={receiptData} /> : <div></div>}
    </div>
  );
};

export default TransferBlock;
