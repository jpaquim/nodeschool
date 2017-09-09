const mongo = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017/' + process.argv[2];
mongo.connect(url, (error, db) => {
  if (error) throw error;
  const collection = db.collection(process.argv[3]);
  collection.remove({
    _id: process.argv[4]
  }, (error) => {
    if (error) throw error;
    db.close();
  });
});
