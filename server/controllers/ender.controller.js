const express = require('express');

const PostalCode = require('../models/postalcode.model');

const router = express.Router();

router.get('/:street', async (req, res, next) => {
  try {
    const address = await PostalCode.find({ rua: req.params.street });
    return res.json(address);
  } catch (e) {
    return next(e);
  }
});

router.get('/:street/:city', async (req, res, next) => {
  try {
    const address = await PostalCode.findOne({ rua: req.params.street, cidade: req.params.city });
    return res.json(address);
  } catch (e) {
    return next(e);
  }
});

module.exports = router;
