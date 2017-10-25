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

  db.handleAnswerEvent(answerData)
    .then(user => res.send(user))
    .catch(() => res.status(500).send('There has been an error handling the answer event.'));
});

module.exports = router;
