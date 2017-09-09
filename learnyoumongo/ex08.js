const mongo = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017/learnyoumongo';
mongo.connect(url, (error, db) => {
  if (error) throw error;
  const parrots = db.collection('parrots');
  parrots.count({
    age: { $gt: parseInt(process.argv[2]) }
  }, (error, count) => {
    if (error) throw error;
    console.log(count);
    db.close();
  });
});
