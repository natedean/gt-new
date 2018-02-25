const {getCollection} = require('../../services/mongo-connect');

const getUserInfo = async (userID) => {
  // user-info collection is meant to be a quick de-normalized store,
  // mostly for level storage
  const { collection, db } = await getCollection('user-info');

  const userInfo = await collection.findOne({ id: userID });

  db.close();

  return userInfo;
};

const insertNewUserInfoRecord = async (userID) => {
  const { collection, db } = await getCollection('user-info');

  const result = await collection.insertOne({
    id: userID,
    level: 1,
    score: 0,
    createdAt: new Date()
  });

  db.close();

  const newUserInfo = result.ops[0]; // dumb...

  return newUserInfo;
};

module.exports = {
  getUserInfo,
  insertNewUserInfoRecord,
};
