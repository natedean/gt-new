const router = require('express').Router();
const { getCachedStats } = require('./cachedStats');

router.get('/', (req, res) => {
  res.send(getCachedStats());
});

module.exports = router;
