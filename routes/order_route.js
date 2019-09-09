const express = require('express');
const order = require('../controller/order_controller');

const router = express.Router();



router.route('/')
    .post(order.insert)

    .get(order.list);

module.exports = router;


