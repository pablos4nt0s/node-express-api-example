// Set up mongoose connection

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGOURL, {
  useNewUrlParser: true,
});
mongoose.connection.on('error', () => {
  throw new Error(`unable to connect to database: ${process.env.MONGOURL}`);
});
mongoose.Promise = global.Promise;

module.exports = mongoose.connection;
