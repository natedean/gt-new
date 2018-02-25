const MONGO_URI = process.env.MONGO_URI;

const MongoDB = require('mongodb');

const {MongoClient} = MongoDB;

if (!MONGO_URI) throw('MONGO_URI environment variable must be set');

const mongoConnect = async () => {
  return MongoClient.connect(MONGO_URI);
};

const getCollection = async collectionName => {
  const db = await MongoClient.connect(MONGO_URI);

  return { collection: db.collection(collectionName), db };
};

module.exports = {
  mongoConnect,
  getCollection
};
