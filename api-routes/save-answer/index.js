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

  // update answers collection
  await db.saveAnswer(userID, questionID, isCorrect);

  // if it was a correct answer, we need to update our user-info collection
  await db.incrementUserScore(userID);

  res.send('answers and user-info collection successfully updated');
});

module.exports = router;
