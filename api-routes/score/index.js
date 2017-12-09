const router = require('express').Router();
const db = require('../db');

router.get('/', async (req, res) => {

  const score = await db.getScore(req.query.userID, req.query.gameID);

  res.send({ score });
});

module.exports = router;
