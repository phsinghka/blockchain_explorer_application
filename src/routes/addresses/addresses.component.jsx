import AddressBlock from "../../components/addresses-block/addresses-block.component";

const addressesData = [
  { id: "0", address: "Oxf39Fd6e51aad88F6F4ce5aB8827279cffb922662" },
  { id: "1", address: "0x70997970C51812dc3A010C7d01b50e0d17dc79C8" },
  { id: "2", address: "Ox3C44CdDdB6a900fa2b585dd299e03d12FA4293BC" },
  { id: "3", address: "Ox90F79bf6EB2c4f870365E785982E1f101E93b906" },
  { id: "4", address: "Ox15d34AAf54267DB7D7C367839AAF71A00a2C6A65" },
  { id: "5", address: "Ox9965507D1a55bcC2695C58ba16FB37d819B0A4dc" },
  { id: "6", address: "Ox976EA74026E726554dB657fA54763abdoC3a0aa9" },
  { id: "7", address: "0x140C79964da2c08b23698B3D3cc7Ca32193d9955" },
  { id: "8", address: "0x23618e81E3f5cdF7f54C3d65f7FBcOaBf5B21E8f" },
  { id: "9", address: "OxaEe7A142d267C1f36714E4a8F75612F20a797204" },
  { id: "10", address: "OxBcd4042DE499D14e55001CcbB24a551F3b954096" },
  { id: "11", address: "Ox71bE63f3384f5fb98995898A86B02Fb2426c5788" },
  { id: "12", address: "OxFABBOac9d68B0B445fB7357272Ff202C5651694a" },
  { id: "13", address: "Ox1CBd3b2770909D4e10f157CABC84C7264073C9EC" },
  { id: "14", address: "OxdF3e18d64BC6A983f673Ab319CCE4f1a57C70972" },
  { id: "15", address: "Oxcd3B766CCDd6AE721141F452C550Ca635964ce71" },
  { id: "16", address: "Ox2546BCD3c84621e976D8185a91A922aE77ECEC30" },
  { id: "17", address: "OxbDA5747bFD65F08deb54cb465eB87D40e51B197E" },
  { id: "18", address: "OxdD2FD4581271e230360230F9337D500430Bf44C0" },
  { id: "19", address: "0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199" },
];

const Addresses = () => {
  return (
    <div>
      <h1>Blockchain Node Addresses</h1>
      <AddressBlock addressesData={addressesData} className="list-group" />
    </div>
  );
};

export default Addresses;
