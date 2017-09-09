const mongo = require('mongodb').MongoClient;

const doc = {
  firstName: process.argv[2],
  lastName: process.argv[3],
};

const url = 'mongodb://localhost:27017/learnyoumongo';
mongo.connect(url, (error, db) => {
  if (error) throw error;
  const docs = db.collection('docs');
  docs.insert(doc, (error, data) => {
    if (error) throw error;
    console.log(JSON.stringify(doc));
    db.close();
  });
});
