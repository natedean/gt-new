const router = require('express').Router();
const questions = require('../data/questions');
const db = require('./db');
const {transformQuestionsWithAverages} = require('./util');

router.get('/', (req, res) => {
  res.send(questions);
});

router.get('/ranked-list', (req, res) => {
  db.getAnswerAverages()
    .then(transformQuestionsWithAverages)
    .then(questionsWithAverages => res.send(questionsWithAverages))
    .catch(() => res.status(500).send('There has been an error retrieving ranked questions list.'));
});

module.exports = router;
