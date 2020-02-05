const mongoose = require('mongoose');

var Query = mongoose.model('Query', {
    operation: { type: String },
    marks: { type: Number },
    subject: { type: String }
});

module.exports = { Query };
