const router = require('express').Router();
const db = require('../db');

router.post('/', async (req, res) => {
  const {
    userID,
    gameID,
    questionID,
    isCorrect,
  } = req.body;

  if (!userID || !gameID || !questionID || !isCorrect) {
    return res.status(500).send('Misshapen req body!');
  }

  const result = await db.saveAnswer(userID, gameID, questionID, isCorrect);

  res.send({ result });
});

module.exports = router;
