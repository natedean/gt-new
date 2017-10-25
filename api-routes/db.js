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

const createNewUser = (username = 'Random User') => {
  const newDoc = {
    username: username,
    totalCorrect: 0,
    totalIncorrect: 0,
    correctIds: [],
    incorrectIds: [],
    _created_at: new Date(),
    _updated_at: new Date()
  };

  return getCollection('users').then(({collection, db}) => {
    return collection.insertOne(newDoc, { returnOriginal: false }).then(res => {
      db.close();
      return res.ops[0];
    })
  });
};

const saveAnswer = async (answerData) => {
  const { collection, db } = await getCollection('answers');
  await collection.insertOne({ ...answerData, _updated_at: new Date() });
  db.close();
};

const updateUserWithNewAnswer = async (answerData) => {
  const query = {_id: ObjectID(answerData.userId)};
  const changeSet = {
    $inc: answerData.isCorrect ? {totalCorrect: 1} : {totalIncorrect: 1},
    $set: {_updated_at: new Date()},
    $addToSet: answerData.isCorrect ? { correctIds: answerData.questionId } : { incorrectIds: answerData.questionId },
    $pull: answerData.isCorrect ? { incorrectIds: answerData.questionId } : { correctIds: answerData.questionId }
  };
  const options = { returnOriginal: false };

  const {collection, db} = await getCollection('users');
  const res = await collection.findOneAndUpdate(query, changeSet, options);

  db.close();

  return res.value;
};

const handleAnswerEvent = async (answerData) => {
  saveAnswer(answerData); // save answer, but don't wait, as we don't need a return value

  const user = await updateUserWithNewAnswer(answerData);

  return user;
};

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

module.exports = {
  createNewUser,
  getUsers,
  getTopUsers,
  handleAnswerEvent,
  getCollection,
  getAnswerAverages
};

async function getCollection(collectionName) {
  const db = await MongoClient.connect(MONGO_URI);

  return { collection: db.collection(collectionName), db };
}
