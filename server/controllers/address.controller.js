const express = require('express');

const AddressService = require('../services/address.service');

const router = express.Router();

router.get('/postalcode/:id', async (req, res, next) => {
  try {
    const address = await AddressService.GetByPostalCode(req.params.id);
    return res.json(address);
  } catch (e) {
    return next(e);
  }
});

router.get('/city/:id', async (req, res, next) => {
  try {
    const address = await AddressService.GetByCity(req.params.id);
    return res.json(address);
  } catch (e) {
    return next(e);
  }
});

module.exports = router;
