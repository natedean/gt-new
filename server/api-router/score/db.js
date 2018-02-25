const {getCollection} = require('../../services/mongo-connect');

const getScore = async (userID) => {
  const { collection, db } = await getCollection('answers');

  const score = await collection.find({ userID, isCorrect: true }).count();

  db.close();

  return score;
};

module.exports = {
  getScore
};
