const express = require('express');
const cepController = require('./cep.controller');

const router = express.Router();

router.use('/cep', cepController);

module.exports = router;
