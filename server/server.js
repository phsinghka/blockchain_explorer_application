const http = require('http');
const mongoose = require('mongoose');

const app = require('./app');

const PORT = process.env.PORT || 8000;

const MONGO_URL =
  'mongodb+srv://explorer-api:explorer-api@blockchainexplorerclust.hyuto7n.mongodb.net/explorer_db?retryWrites=true&w=majority';

const server = http.createServer(app);

mongoose.connection.once('open', () => {
  console.log('Database Connected !!');
});

mongoose.connection.on('error', (err) => {
  console.error(err);
});

async function startServer() {
  await mongoose.connect(MONGO_URL);
  server.listen(PORT, () => {
    console.log(`Server is Listening on ${PORT}....`);
  });
}

startServer();
