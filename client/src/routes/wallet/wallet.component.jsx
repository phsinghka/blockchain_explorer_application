import React, { useState, useEffect } from 'react';
import axios from 'axios';

import WalletBlock from '../../components/wallet-block/wallet-block.component';

const Wallet = () => {
  const [accountData, setAccountData] = useState({});

  const fetchAccountData = async () => {
    const { data } = await axios.get(
      'http://localhost:8000/account/balance/Ox71bE63f3384f5fb98995898A86B02Fb2426c5788'
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
