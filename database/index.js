const { Client } = require('pg');

const hostURL = process.env.DB_URL || 'localhost';
const username = process.env.DB_User || 'root';
const pw = process.env.DB_PW || '';

const client = new Client({
  host: hostURL,
  user: 'TiffanyJalovec',
  database: 'airbnb',
});

client.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('postgres connected!');
  }
});

const getAllExpReviews = (expId, callback) => {
  const query = `select * from reviews where experience_id = ${expId};`;
  client.query(query, (err, response) => {
    if (err) {
      console.log('error database');
      callback(err);
    } else {
      callback(null, response);
    }
  });
};

module.exports = {
  connection: client,
  getExpReviews: getAllExpReviews,
};
