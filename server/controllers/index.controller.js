const express = require('express');

const addressController = require('./address.controller');

const router = express.Router();

router.use('/address', addressController);

module.exports = router;
