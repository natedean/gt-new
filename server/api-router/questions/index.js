const router = require('express').Router();
const questions = require('../data/questions');
const db = require('../../db');

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

// util
function transformQuestionsWithAverages(averages) {
  // we get back an object with avg answer stats, but need to also include question attributes
  return averages.map(avg => ({ ...avg, ...questions.find(q => q.id === avg.questionId) }));
}
