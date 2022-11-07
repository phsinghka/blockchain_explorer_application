import { useParams } from "react-router-dom";
import TransferBlock from "../../components/transfer-block/transfer-block.component";

const transferData = {
  from: "0xf2f5c73fa04406b1995e397b55c24ab1f3ea726c",
  to: "",
};

const Transfer = () => {
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
