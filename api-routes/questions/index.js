const router = require('express').Router();
const questions = require('./questions');
const db = require('../db');

router.get('/', (req, res) => {
  res.send(questions);
});

router.get('/ranked-list', (req, res) => {
  db.getQuestionsRankedList()
    .then(questions => res.send(questions))
    .catch(() => res.status(500).send('There has been an error retrieving ranked questions list.'));
});

module.exports = router;
