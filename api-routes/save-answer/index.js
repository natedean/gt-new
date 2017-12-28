const router = require('express').Router();
const db = require('../db');

router.post('/', async (req, res) => {
  const {
    userID,
    questionID,
    isCorrect = false,
  } = req.body;

  if (!questionID) {
    return res.status(500).send('Misshapen req body! Must questionID');
  }

  const result = await db.saveAnswer(userID, questionID, isCorrect);

  res.send({ result });
});

module.exports = router;
