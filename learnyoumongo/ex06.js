const mongo = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017/' + process.argv[2];
mongo.connect(url, (error, db) => {
  if (error) throw error;
  const users = db.collection('users');
  users.update({
    username: 'tinatime'
  }, {
    $set: {
      age: 40
    }
  }, (error) => {
    if (error) throw error;
    db.close();
  });
});
