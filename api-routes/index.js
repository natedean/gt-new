const router = require('express').Router();
const statsRoutes = require('./stats');
const usersRoutes = require('./users');
const questionsRoutes = require('./questions');

router.use('/stats', statsRoutes);
router.use('/users', usersRoutes);
router.use('/questions', questionsRoutes);

module.exports = router;
