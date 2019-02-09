const express = require('express');

const router = express.Router();

router.get('/:cep', async (req, res, next) => {
  try {
    return res.json(`cep informado: ${req.params.cep}`);
  } catch (e) {
    return next(e);
  }
});

module.exports = router;
