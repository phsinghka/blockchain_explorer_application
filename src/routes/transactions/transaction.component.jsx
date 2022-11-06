import TransactionBlock from "../../components/transaction-block/transaction-block.component";

const historyData = [
  {
    hash: "0x55ffbbd5d6f0d5eabdd4a185131e14d7891d9dc4bed9dbdf5dc0d0c393504bb5",
    status: "SUCCESS",
    timestamp: "Nov-06-2022 06:00:59 PM +UTC",
    from: "0xf2f5c73fa04406b1995e397b55c24ab1f3ea726c",
    to: "0xebec795c9c8bbd61ffc14a6662944748f299cacf",
    value: "250 ETH",
    gasUsed: "21000",
  },
  {
    hash: "0x2767aabb9215f11f8ddc25cb0d43355632b8fe0f3a878cc5bda58763b739b6f5",
    status: "SUCCESS",
    timestamp: "Nov-06-2022 06:00:59 PM +UTC",
    from: "0xf2f5c73fa04406b1995e397b55c24ab1f3ea726c",
    to: "0xebec795c9c8bbd61ffc14a6662944748f299cacf",
    value: "250 ETH",
    gasUsed: "21000",
  },
];

const Transaction = () => {
  return (
    <div>
      <h1>Transaction History</h1>
      <TransactionBlock historyData={historyData} />
    </div>
  );
};

export default Transaction;
