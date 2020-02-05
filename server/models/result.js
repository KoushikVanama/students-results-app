const mongoose = require('mongoose');

var Result = mongoose.model('Result', {
    name: { type: String },
    marks: { type: Number },
    subject: { type: String }
});

module.exports = { Result };
