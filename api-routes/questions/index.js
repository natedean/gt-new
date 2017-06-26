const router = require('express').Router();
const questions = require('./helpers');

router.get('/', (req, res) => {
  questions.getAllQuestions()
    .then(questions => res.send(questions))
    .catch(() => res.send('There has been an error getting questions'));
});

module.exports = router;
