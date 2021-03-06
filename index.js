const express = require('express');
const app = express();
const port = 8080;

const mongoose = require('mongoose');

mongoose
  .connect(
    'mongodb+srv://kyukim:abcd1234@boiler-plate.lntpm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
  )
  .then(() => console.log('MongoDB Connected...'))
  .catch((err) => console.log(err));

app.get('/', (req, res) => {
  res.send('Hello world');
});

app.listen(port, () => console.log(`Example app listening on port ${port}`));
