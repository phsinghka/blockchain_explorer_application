import { useParams } from 'react-router-dom';
import axios from 'axios';
import TransferBlock from '../../components/transfer-block/transfer-block.component';
import { useState, useEffect } from 'react';

const Transfer = () => {
  const [address, setAddress] = useState(0);
  const fetchAccountData = async () => {
    const { data } = await axios.get(
      'http://localhost:8000/account/balance/0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266'
    );
    setAddress(data.address);
  };

  useEffect(() => {
    fetchAccountData();
  }, []);

  const transferData = {
    from: address,
    to: '',
  };

  const { addressHash } = useParams();
  transferData.to = addressHash;
  return (
    <div>
      <h1>Transfer</h1>
      <TransferBlock transferData={transferData} />
    </div>
  );
};

export default Transfer;
