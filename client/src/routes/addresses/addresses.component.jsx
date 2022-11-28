import React, { useState, useEffect } from 'react';
import axios from 'axios';

import AddressBlock from '../../components/addresses-block/addresses-block.component';

const Addresses = () => {
  const [addressesData, setAddressesData] = useState([]);

  const fetchAccountData = async () => {
    const { data } = await axios.get('http://localhost:8000/account/addresses');
    console.log(data);
    setAddressesData(data);
  };

  useEffect(() => {
    fetchAccountData();
  }, []);
  return (
    <div>
      <h1>Blockchain Node Addresses</h1>
      <AddressBlock addressesData={addressesData} className='list-group' />
    </div>
  );
};

export default Addresses;
