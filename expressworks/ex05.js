const express = require('express');
const stylus = require('stylus');

const app = express();

staticPath = process.argv[3];
app.use(stylus.middleware(staticPath));
app.use(express.static(staticPath));

app.listen(process.argv[2]);
