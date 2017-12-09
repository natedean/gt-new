const router = require('express').Router();

router.get('/', async (req, res) => {
  const {
    userID,
    gameID,
    questionID,
    isCorrect,
  } = req.body;

  const score = await db.saveAnswer(userID, gameID, questionID, isCorrect);

  res.send({ score });
});

module.exports = router;
