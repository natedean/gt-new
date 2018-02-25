const router = require('express').Router();
const db = require('./db');

router.get('/', (req, res) => {
  const limit = 20;

  const page = req.query.page || 1;
  const pageOffset = page <= 1 ? 0 : page * limit;
  const sortDirection = req.query.sortDirection || 'desc';
  const sortCode = sortDirection === 'desc' ? -1 : 1;
  const sortField = req.query.sortField || 'timestamp';

  db.getUsers(pageOffset, limit, sortField, sortCode)
    .then(users => res.send(users))
    .catch(() => res.send('There has been an error connecting to the database'));
});

router.get('/top', (req, res) => {
  db.getTopUsers()
    .then(users => res.send(users))
    .catch(() => res.send('There has been an error connecting to the database'));
});

module.exports = router;
