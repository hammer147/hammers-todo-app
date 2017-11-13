const mongoose = require('mongoose');

mongoose.Promise = global.Promise; // use es6 promises

const uri = process.env.MONGODB_URI;
const options = { useMongoClient: true }; // needed in mongoose >= 4.11.0
mongoose.connect(uri, options);

module.exports = { mongoose };