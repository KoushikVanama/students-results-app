const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

const mongoose = require('mongoose');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(cors({ origin: 'http://localhost:3000' }));
app.use(cors());

mongoose.connect('mongodb://sai:saikoushik1@ds215229.mlab.com:15229/students-results-project',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

// api routes
app.use('/users', require('./controllers/users.controller'));
app.use('/results', require('./controllers/results.controller'));
app.use('/subjects', require('./controllers/subjects.controller'));

const port = 4000;
app.listen(4000, function () {
    console.log('Server listening on port ' + port);
});
