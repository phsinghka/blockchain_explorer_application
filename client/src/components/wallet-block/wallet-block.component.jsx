const WalletBlock = ({ accountData }) => {
  return (
    <div>
      <p>
        <b>Address: {accountData.address}</b>
      </p>
      <p>
        <b>Balance: {accountData.balance} ETH</b>
      </p>
    </div>
  );
};

export default WalletBlock;
