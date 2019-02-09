const express = require('express');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    return res.json('ok');
  } catch (e) {
    return next(e);
  }
});

module.exports = router;
