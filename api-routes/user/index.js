const router = require('express').Router();
const questions = require('../questions/helpers');
const db = require('../db');

router.post('/answer', (req, res) => {
  const answerData = req.body;

  console.log(answerData);

  questions.updateQuestion(answerData.questionId, answerData.isCorrect, answerData.milliseconds);

  if (!answerData.userId) {
    console.log('creating new user!');

    return db.createNewUser().then(user => {
      const updatedUserData = Object.assign({}, answerData, { userId: user._id });

      return db.handleAnswerEvent(updatedUserData)
        .then(user => {
          res.send(user);
        })
        .catch(err => {
          res.send('There has been an error updating the user');
        });
    });
  }

  db.handleAnswerEvent(answerData)
    .then(user => res.send(user))
    .catch(() => res.send('There has been an error updating the user'));
});

module.exports = router;
