const router = require('express').Router();
const statsRoutes = require('./stats');
const usersRoutes = require('./users');
const userRoutes = require('./user');
const questionsRoutes = require('./questions');
const scoreRoutes = require('./score');

router.use('/stats', statsRoutes);
router.use('/users', usersRoutes);
router.use('/user', userRoutes);
router.use('/questions', questionsRoutes);
router.use('/score', scoreRoutes);

module.exports = router;
