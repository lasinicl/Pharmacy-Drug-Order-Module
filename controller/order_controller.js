const Order = require('../models/orders/order');

function insert(req, res){
    const user = new Order({
        name: req.body.name

    });

    user.save()
        .then(savedUser => res.json(savedUser))
        .catch(e => next(e));
}

function list(req, res){
    res.send('get Val');
}

module.exports = {insert, list}
