const router = require('express').Router();
const db = require('../db');

router.post('/', async (req, res) => {
  const {
    userID,
    gameID,
    questionID,
    isCorrect = false,
  } = req.body;

  if (!gameID || !questionID) {
    return res.status(500).send('Misshapen req body! Must include gameID and questionID');
  }

  const result = await db.saveAnswer(userID, gameID, questionID, isCorrect);

  res.send({ result });
});

module.exports = router;
