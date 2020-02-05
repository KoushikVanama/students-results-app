const express = require('express');
const router = express.Router();

var { Result } = require('../models/result');
var { Query } = require('../models/query');

router.get('/', (req, res) => {
    console.log(req.query);
    let queryObj = req.query;
    let operation = queryObj.operation === 'gt' ? { $gt: queryObj.marks } : { $lt: queryObj.marks };
    Result.find({
        subject: queryObj.subject,
        marks: operation
    }, (err, doc) => {
        if(!err) { res.send(doc); }
        else { console.log("Error in retreving student record:"+ JSON.stringify(err, undefined, 2)); }
    });
});

router.post('/query', (req, res) => {
    var query = new Query({
        subject: req.body.subject,
        operation: req.body.operation,
        marks: req.body.marks
    });
    query.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in save'+ JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/queries', (req, res) => {
    Query.find({}, (err, doc) => {
        if(!err) { res.send(doc); }
        else { console.log("Error in retreving student record:"+ JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;
