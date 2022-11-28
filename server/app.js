const path = require('path');

const express = require('express');
const cors = require('cors');

const transactionRouter = require('./routes/transactions/transactions.routes');
const accountRouter = require('./routes/account/account.routes.js');

const app = express();

app.use(
  cors({
    origin: 'http://localhost:3000',
  })
);

app.use(express.json());

app.use('/transaction', transactionRouter);
app.use('/account', accountRouter);

module.exports = app;
