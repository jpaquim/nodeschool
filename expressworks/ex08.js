const fs = require('fs');
const express = require('express');

const app = express();

app.get('/books', (req, res) => {
  fs.readFile(process.argv[3], (error, contents) => {
    try {
      if (error) {
        throw error;
      }
      res.json(JSON.parse(contents));
    } catch(error) {
      res.sendStatus(500);
    }
  });
});

app.listen(process.argv[2]);
