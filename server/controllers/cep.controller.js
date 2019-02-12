const express = require('express');

const PostalCode = require('../models/postalcode.model');

const router = express.Router();

router.get('/:cep', async (req, res, next) => {
  try {
    const address = await PostalCode.findOne({ cep: req.params.cep });
    return res.json(address);
  } catch (e) {
    return next(e);
  }
});

module.exports = router;
