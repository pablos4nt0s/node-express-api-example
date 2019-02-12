const express = require('express');

const cepController = require('./cep.controller');
const enderController = require('./ender.controller');

const router = express.Router();

router.use('/cep', cepController);
router.use('/endereco', enderController);

module.exports = router;
