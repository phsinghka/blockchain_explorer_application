const express = require('express');

const { getAddresses, getBalance } = require('./account.controller');

const accountRouter = express.Router();

accountRouter.get('/addresses', getAddresses);
accountRouter.get('/balance/:address', getBalance);

module.exports = accountRouter;
