const express = require('express');
const router = express.Router();

const order = require('./order_route');
const request = require('./request_route');
//your routers
router.use('/orders', order);
router.use('/requests', request);

module.exports = router;

