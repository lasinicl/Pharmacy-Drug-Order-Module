'use strict';

const express = require('express');
const mongoose = require('mongoose');

mongoose.set('debug', false);

const RequestModel = mongoose.model('Request');

const Router = express.Router();

Router.get('/request', (req, res) => {
    RequestModel.find().exec().then(requests => {
    res.json(requests);
}).catch(err => {
    console.error(err);
res.sendStatus(500);
});
});

Router.get('/request/:id', (req, res) => {
    RequestModel.findById(req.params.id).exec().then(requests => {
    res.json(request || {});
}).catch(err => {
    console.error(err);
res.sendStatus(500);
});
});

Router.post('/request', (req, res) => {
    const request = new  RequestModel(req.body);
request.save().then(request => {
    res.json(request);
}).catch(err => {
    console.error(err);
res.sendStatus(500);
});
});

Router.put('/request/:id', (req, res) => {
    const request = req.body;
const availability = req.params.id;
RequestModel.findByIdAndUpdate(availability, {$set: 0}).then(requestDb => {
    res.json(request);
}).catch(err => {
    console.error(err);
res.sendStatus(500);
});
});

module.exports = Router;
