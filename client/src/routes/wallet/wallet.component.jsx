import React, { useState, useEffect } from 'react';
import axios from 'axios';

import WalletBlock from '../../components/wallet-block/wallet-block.component';

const Wallet = () => {
  const [accountData, setAccountData] = useState({});

  const fetchAccountData = async () => {
    const { data } = await axios.get(
      'http://localhost:8000/account/balance/0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266'
    );
    console.log(data);
    setAccountData(data);
  };

  useEffect(() => {
    fetchAccountData();
  }, []);
  return (
    <div>
      <h1>My Wallet</h1>
      <WalletBlock accountData={accountData} />
    </div>
  );
};

export default Wallet;
