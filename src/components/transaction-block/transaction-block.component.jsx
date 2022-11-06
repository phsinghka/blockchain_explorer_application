import "./transaction-block.styles.css";

const TransactionBlock = ({ historyData }) => {
  return (
    <div>
      {historyData.map((history) => (
        <div key={history.hash} className="transaction-container">
          <p>
            <b>Transaction Hash:</b> {history.hash}
          </p>
          <p>
            <b>Status:</b> {history.status}
          </p>
          <p>
            <b>TimeStamp:</b> {history.timestamp}
          </p>
          <p>
            <b>From:</b> {history.from}
          </p>
          <p>
            <b>To:</b> {history.to}
          </p>
          <p>
            <b>Value:</b> {history.value}
          </p>
          <p>
            <b>Gas Used:</b> {history.gasUsed}
          </p>
        </div>
      ))}
    </div>
  );
};

export default TransactionBlock;
