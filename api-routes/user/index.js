const router = require('express').Router();
const questions = require('../questions/helpers');
const db = require('../db');

router.post('/create', (req, res) => {
  console.log('creating!', req.body.username);
  return db.createNewUser(req.body.username).then(user => {
    res.send(user);
  }).catch(err => {
    res.send('There has been an error creating the user');
  })
});

router.post('/answer', (req, res) => {
  const answerData = req.body;

  if (!answerData.userId) {
    console.log('creating new user... again?  CRAP');

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
