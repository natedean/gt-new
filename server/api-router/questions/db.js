const {getCollection} = require('../../services/mongo-connect');

const getAnswerAverages = async () => {
  const { collection, db } = await getCollection('answers');

  const firstProjection = {
    $project: {
      _id: 0,
      isCorrect: { $cond : [ '$isCorrect', 1, 0 ]  },
      questionID: 1,
      userID: 1,
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
      questionID: '$_id',
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
  getAnswerAverages
};
