import React, { useState, useEffect } from 'react';
import axios from 'axios';

import TransactionBlock from '../../components/transaction-block/transaction-block.component';

const Transaction = () => {
  const [historyData, setHistoryData] = useState([]);

  const fetchHistoryData = async () => {
    const response = await axios.get(
      'http://localhost:8000/transaction/history'
    );
    console.log(response.data);
    setHistoryData(response.data);
  };

  useEffect(() => {
    fetchHistoryData();
  }, []);
  return (
    <div>
      <h1>Transaction History</h1>
      <TransactionBlock historyData={historyData} />
    </div>
  );
};

export default Transaction;
