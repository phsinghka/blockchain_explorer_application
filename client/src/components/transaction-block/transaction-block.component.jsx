import './transaction-block.styles.css';
import moment from 'moment';

const TransactionBlock = ({ historyData }) => {
  return (
    <div>
      {historyData.map((history) => (
        <div key={history._id} className='transaction-container'>
          <p>
            <b>Transaction Hash:</b> {history.txHash}
          </p>
          <p>
            <b>Status:</b> {history.status}
          </p>
          <p>
            <b>TimeStamp:</b> {moment(history.timestamp).format('lll')}
          </p>
          <p>
            <b>From:</b> {history.sender}
          </p>
          <p>
            <b>To:</b> {history.receiver}
          </p>
          <p>
            <b>Value:</b> {history.amount}
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
