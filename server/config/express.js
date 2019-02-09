const bodyParser = require('body-parser');
const compress = require('compression');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const express = require('express');
const helmet = require('helmet');
const methodOverride = require('method-override');
const morgan = require('morgan');
const db = require('./db');

const healthCheckController = require('../controllers/healthcheck.controller');
const controllers = require('../controllers/index.controller');

const app = express();

// connect to mongodb
app.use((req, res, next) => {
  req.db = db;
  next();
});

// parse body params and attache them to req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false,
}));

// parse HTTP request cookies
app.use(cookieParser());

// override HTTP verbs
app.use(methodOverride('_method'));

// compress a HTTP message
app.use(compress());

// secure apps by setting various HTTP headers
app.use(helmet());

// enable CORS - Cross Origin Resource Sharing
app.use(cors());

// adjusts for performance
app.set('etag', false);
app.set('x-powered-by', false);

// log
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// routes
app.use('/healthcheck', healthCheckController);
app.use('/api', controllers);

// error handler
/* eslint no-unused-vars: 0 */
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({ error: true, msg: err.detail || err.message });
});

module.exports = app;
