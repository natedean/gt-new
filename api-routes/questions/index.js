const router = require('express').Router();
const questions = require('./questions');

router.get('/', (req, res) => {
  res.send(questions);
});

module.exports = router;
