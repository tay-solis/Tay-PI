const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/tay-app', {useNewUrlParser: true});

// module.exports.Resume = require('./resume');
module.exports.Book = require('./book');
