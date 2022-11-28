const mongoose = require('mongoose');

const Address = require('./models/address.model');
const Transaction = require('./models/transaction.model');

const MONGO_URL =
  'mongodb+srv://explorer-api:explorer-api@blockchainexplorerclust.hyuto7n.mongodb.net/explorer_db?retryWrites=true&w=majority';

mongoose.connection.once('open', () => {
  console.log('Database Connected !!');
});

mongoose.connection.on('error', (err) => {
  console.error(err);
});

const addresses = [
  'Ox9965507D1a55bcC2695C58ba16FB37d819B0A4dc',
  '0x23618e81E3f5cdF7f54C3d65f7FBcOaBf5B21E8f',
  'Ox71bE63f3384f5fb98995898A86B02Fb2426c5788',
  'Oxcd3B766CCDd6AE721141F452C550Ca635964ce71',
  '0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199',
];

const initialTransactions = [
  {
    txHash:
      '0x55ffbbd5d6f0d5eabdd4a185131e14d7891d9dc4bed9dbdf5dc0d0c393504bb5',
    status: 'SUCCESS',
    timestamp: Date.now() - 234554,
    sender: addresses[2],
    receiver: addresses[4],
    amount: 200,
    gasUsed: 21000,
  },
  {
    txHash:
      '0x55ffbbd5d6f0d5eabdd4a185131e14d7891d9dc4bed9dbdf5dc0d0c393504bb5',
    status: 'SUCCESS',
    timestamp: Date.now() - 245341,
    sender: addresses[3],
    receiver: addresses[1],
    amount: 324,
    gasUsed: 21000,
  },
  {
    txHash:
      '0x55ffbbd5d6f0d5eabdd4a185131e14d7891d9dc4bed9dbdf5dc0d0c393504bb5',
    status: 'SUCCESS',
    timestamp: Date.now() - 1423452,
    sender: addresses[1],
    receiver: addresses[0],
    amount: 123,
    gasUsed: 21000,
  },
  {
    txHash:
      '0x55ffbbd5d6f0d5eabdd4a185131e14d7891d9dc4bed9dbdf5dc0d0c393504bb5',
    status: 'SUCCESS',
    timestamp: Date.now() - 12345234,
    sender: addresses[3],
    receiver: addresses[0],
    amount: 342,
    gasUsed: 21000,
  },
  {
    txHash:
      '0x55ffbbd5d6f0d5eabdd4a185131e14d7891d9dc4bed9dbdf5dc0d0c393504bb5',
    status: 'SUCCESS',
    timestamp: Date.now() - 5642524,
    sender: addresses[1],
    receiver: addresses[2],
    amount: 678,
    gasUsed: 21000,
  },
  {
    txHash:
      '0x55ffbbd5d6f0d5eabdd4a185131e14d7891d9dc4bed9dbdf5dc0d0c393504bb5',
    status: 'SUCCESS',
    timestamp: Date.now() - 23452,
    sender: addresses[3],
    receiver: addresses[4],
    amount: 435,
    gasUsed: 21000,
  },
  {
    txHash:
      '0x55ffbbd5d6f0d5eabdd4a185131e14d7891d9dc4bed9dbdf5dc0d0c393504bb5',
    status: 'SUCCESS',
    timestamp: Date.now() - 2342345,
    sender: addresses[4],
    receiver: addresses[0],
    amount: 534,
    gasUsed: 21000,
  },
];

async function seedData() {
  await mongoose.connect(MONGO_URL);
  const ifDataExists = await Address.find();

  if (ifDataExists.length > 0) {
    console.log('Already Seeded');
    return;
  }

  for (let i = 0; i < addresses.length; i++) {
    await Address.create({ address: addresses[i] });
  }

  for (let i = 0; i < initialTransactions.length; i++) {
    await Transaction.create(initialTransactions[i]);
  }
  console.log('Finished Seeding');
}

seedData();
