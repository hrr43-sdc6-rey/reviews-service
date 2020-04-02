const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const ejs = require('ejs');
const db = require('../database/index.js');
const morgan = require('morgan');

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.engine('html', ejs.renderFile);


app.use(express.static('./public'));
app.get('/:id', (req, res) => {
  console.log('elsa');
  res.render('../public/index.html');
});

app.get('/reviews/:id', (req, res) => {
  db.getExpReviews(req.params.id, (err, reviews) => {
    if (err) {
      console.error(err);
      res.status(400).send(err);
    } else {
      res.status(200).send(reviews.rows);
      console.log(reviews.rows);
    }
  });
});

app.post('/reviews', (req, res) => {
  var postData = req.body;
  db.connection.query('INSERT INTO reviews SET ?', postData, function(error, results, fields) {
    if (error) {
      console.log('error in post', error);
    } else {
    console.log('post success!');
    res.status(200).send(results);
    }
  });
});

app.put('/reviews/:id', (req, res) => {
  db.connection.query('UPDATE reviews SET username = ?, avatar = ?, date = ?, stars = ?  where id = ?', [req.body.username, req.body.avatar, req.body.date, req.body.stars,req.body.id], function (error, results, fields) {
    if (error) {
      console.log('error in update', error);
    } else {
    console.log('update successful!');
    res.status(200).send(results);
    }
  })
});

app.delete('/reviews/:id', (req, res) => {
  db.connection.query('DELETE FROM reviews where username = ?', [req.body.username], function (error, results, fields) {
    if (error) {
      console.log('error in delete', error);
    } else {
    console.log('delete request successful');
    res.status(200).send(results);
    }
  })
})


module.exports = app;
