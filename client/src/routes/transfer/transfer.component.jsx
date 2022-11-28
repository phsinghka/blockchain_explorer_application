import { useParams } from 'react-router-dom';
import axios from 'axios';
import TransferBlock from '../../components/transfer-block/transfer-block.component';
import { useState, useEffect } from 'react';

const Transfer = () => {
  const [address, setAddress] = useState(0);
  const fetchAccountData = async () => {
    const { data } = await axios.get(
      'http://localhost:8000/account/balance/Ox71bE63f3384f5fb98995898A86B02Fb2426c5788'
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
