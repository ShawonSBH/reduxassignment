const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const { mongoURI } = require('./config/key');

const items = require('./routes/api/items')

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const db = mongoURI;

mongoose.connect(db)
  .then( () => console.log('MongoDB connected...'))
  .catch(err => console.log(err));

const port = process.env.PORT || 5000;

app.use('/api/items', items);

app.listen(port, () => console.log(`Server started on port ${port}`));