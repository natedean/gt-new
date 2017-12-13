const router = require('express').Router();
const statsRoutes = require('./stats');
const usersRoutes = require('./users');
const userRoutes = require('./user');
const questionsRoutes = require('./questions');
const scoreRoutes = require('./score');
const saveAnswerRoutes = require('./save-answer');

router.use('/stats', statsRoutes);
router.use('/users', usersRoutes);
router.use('/user', userRoutes);
router.use('/questions', questionsRoutes);
router.use('/score', scoreRoutes);
router.use('/save-answer', saveAnswerRoutes);

module.exports = router;
