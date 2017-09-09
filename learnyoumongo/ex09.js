const mongo = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017/learnyoumongo';
mongo.connect(url, (error, db) => {
  if (error) throw error;
  const prices = db.collection('prices');
  prices.aggregate([{
    $match: {
      size: process.argv[2]
    }
  }, {
    $group: {
      _id: 'average',
      average: {
        $avg: '$price'
      }
    }
  }]).toArray((error, results) => {
      if (error) throw error;
      console.log(results[0].average.toFixed(2));
      db.close();
    });
});
