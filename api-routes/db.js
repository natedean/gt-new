const MONGO_URI = process.env.MONGO_URI;

const MongoDB = require('mongodb');

const {MongoClient, ObjectID} = MongoDB;

if (!MONGO_URI) throw('MONGO_URI environment variable must be set');

const getUsers = (pageOffset, limit, sortField, sortCode) =>
  MongoClient.connect(MONGO_URI)
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
  MongoClient.connect(MONGO_URI)
    .then(db => {
      const collection = db.collection('users');
      const timeframe = new Date(new Date().getTime() - 1000 * 60 * 60 * 24 * 30); // find all users updated in the last 30 days
      const fieldsToRetrieve = {
        username: 1,
        totalCorrect: 1,
        totalIncorrect: 1,
        skill: 1,
        _created_at: 1,
        _updated_at: 1
      };

      return collection
        .find({ totalCorrect: {$gt: 0} , _updated_at: {$gte: timeframe } }, fieldsToRetrieve)
        .sort({ _updated_at: -1 })
        .limit(300)
        .toArray()
        .then(users => {
          db.close();
          return users;
        });
    });

const getAnswerAverages = async () => {
  const { collection, db } = await getCollection('answers');

  const firstProjection = {
    $project: {
      _id: 0,
      isCorrect: { $cond : [ '$isCorrect', 1, 0 ]  },
      questionId: 1,
      userId: 1,
      milliseconds: 1 }
  };

  const group = {
    $group: {
      _id: '$questionId',
      avgCorrect: { $avg: '$isCorrect' },
      avgTime: { $avg: '$milliseconds' },
      count: { $sum: 1 }
    }
  };

  const secondProjection = {
    $project: {
      _id: 0,
      questionId: '$_id',
      avgCorrect: 1,
      avgTime: 1,
      totalAnswers: '$count'
    }
  };

  const sort = {
    $sort: { avgCorrect: 1 }
  };

  const res = await collection.aggregate([firstProjection, group, secondProjection, sort]).toArray();

  db.close();

  return res;
};

const getScore = async (userID, gameID) => {
  const { collection, db } = await getCollection(`${gameID}_answers`);

  const score = await collection.find({ userID, isCorrect: true }).count();

  db.close();

  return score;
};

const saveAnswer = async (userID, gameID, questionID, isCorrect) => {
  const { collection, db } = await getCollection(`${gameID}_answers`);

 const result = await collection.insertOne({ userID, questionID, isCorrect, timestamp: new Date() });

  db.close();

  return 'success!';
};

module.exports = {
  getUsers,
  getTopUsers,
  getCollection,
  getAnswerAverages,
  getScore,
  saveAnswer
};

async function getCollection(collectionName) {
  const db = await MongoClient.connect(MONGO_URI);

  return { collection: db.collection(collectionName), db };
}
