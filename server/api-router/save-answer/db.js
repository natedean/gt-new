const {getCollection} = require('../../services/mongo-connect');

const questions = require('../data/questions');

const saveAnswer = async (userID, questionID, isCorrect) => {
  const { collection, db } = await getCollection('answers');

  // lookup additional question info
  const question = questions[questionID];

  const {category, level} = question;

  await collection.insertOne({
    userID,
    questionID,
    isCorrect,
    category,
    level,
    timestamp: new Date()
  });

  db.close();

  return 'success!';
};

const incrementUserScore = async (userID) => {
  const { collection, db } = await getCollection('user-info');

  await collection.findOneAndUpdate({ id: userID }, { $inc: {score: 1} });

  db.close();

  return 'success!';
};

module.exports = {
  saveAnswer,
  incrementUserScore
};
