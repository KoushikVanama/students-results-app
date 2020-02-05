const express = require('express');
const router = express.Router();
var fs = require('fs');

router.get('/', (req, res) => {
    var arr = [];
    fs.readFile('./subjects.txt', {encoding: 'utf-8'}, function(err, data){
        if (!err) {
            arr = data.split('\n');
            console.log('received: ', data, arr, Array.isArray(arr));
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(arr.toString());
            res.end();
        } else {
            console.log(err);
        }
    });
});

module.exports = router;
