const HTTP = require('q-io/http');

HTTP.read('http://localhost:7000')
  .then(userId => HTTP.read('http://localhost:7001/' + userId))
  .then(JSON.parse)
  .then(console.log)
  .catch(console.log);
