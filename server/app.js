const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const ejs = require('ejs');
const db = require('../database/index.js');

const app = express();

const whitelist = ['http://18.222.165.232:4000', 'http://18.222.165.232:3007', 'http://18.223.132.12:4000', 'http://18.217.113.225:4000', 'http://localhost:3007', 'http://localhost:4000'];
const corsOptions = {
  origin: (origin, callback) => {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

app.use(express.static('./public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.engine('html', ejs.renderFile);

app.get('/:id', (req, res) => {
  res.render('../public/index.html');
});

app.get('/reviews/:id', cors(corsOptions), (req, res) => {
  db.getExpReviews(req.params.id, (err, reviews) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(reviews);
    }
  });
});

module.exports = app;
