const mongo = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017/learnyoumongo';
mongo.connect(url, (error, db) => {
  const parrots = db.collection('parrots');
  parrots.find({
    age: { $gt: parseInt(process.argv[2]) }
  }, {
    name: 1,
    age: 1,
    _id: 0
  }).toArray((error, documents) => {
      console.log(documents);
      db.close();
    });
});
