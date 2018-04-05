const express = require('express');
const dbHelpers = require('../db/index.js');

const app = express();
app.use(express.static('dist'));

app.get('/', (req, res) => {
  res.send('hello world');
});

app.get('/btc', (req, res) => {
  dbHelpers.dbFindAll((err, data) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.send(data);
    }
  });
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));
