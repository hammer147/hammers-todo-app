const mongoose = require('mongoose');

mongoose.Promise = global.Promise; // use es6 promises

const uri = 'mongodb://localhost:27017/TodoApp';
const options = { useMongoClient: true }; // needed in mongoose >= 4.11.0
mongoose.connect(uri, options);

module.exports = {mongoose};