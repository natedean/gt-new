const router = require('express').Router();
const db = require('../db');

router.post('/', async (req, res) => {
  const {
    userID,
    gameID,
    questionID,
    isCorrect,
  } = req.body;

  const result = await db.saveAnswer(userID, gameID, questionID, isCorrect);

  console.log(result);

  res.send({ result });
});

module.exports = router;
