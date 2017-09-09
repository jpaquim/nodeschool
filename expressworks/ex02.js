const path = require('path');
const express = require('express');
const app = express();

const staticPath = process.argv[3] || path.join(__dirname, 'public');
app.use(express.static(staticPath));
app.listen(process.argv[2]);
