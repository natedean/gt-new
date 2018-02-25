const {mongoConnect} = require('../../services/mongo-connect');

const getUsers = (pageOffset, limit, sortField, sortCode) =>
  mongoConnect()
    .then(db => {
      const collection = db.collection('users');
      const fieldsToRetrieve = {
        username: 1,
        totalCorrect: 1,
        totalIncorrect: 1,
        skill: 1,
        _created_at: 1,
        _updated_at: 1
      };

      return collection
        .find({}, fieldsToRetrieve)
        .skip(pageOffset)
        .limit(limit)
        .sort([sortField, sortCode])
        .toArray()
        .then(users => {
          db.close();
          return users;
        });
    });

const getTopUsers = () =>
  mongoConnect()
    .then(db => {
      const collection = db.collection('users');
      const timeframe = new Date(new Date().getTime() - 1000 * 60 * 60 * 24 * 30); // find all users updated in the last 30 days
      const fieldsToRetrieve = {
        username: 1,
        totalCorrect: 1,
        totalIncorrect: 1,
        skill: 1,
        _created_at: 1,
        timestamp: 1
      };

      return collection
        .find({ totalCorrect: {$gt: 0} , timestamp: {$gte: timeframe } }, fieldsToRetrieve)
        .sort({ timestamp: -1 })
        .limit(300)
        .toArray()
        .then(users => {
          db.close();
          return users;
        });
    });

module.exports = {
  getUsers,
  getTopUsers
};
