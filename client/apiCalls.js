import axios from 'axios';

const getReviews = (id, callback) => {
  axios.get(`/reviews/${id}`) // This needs to change for AWS/localhost
    .then((reviews) => {
      console.log(reviews.data);
      callback(null, reviews.data);
    })
    .catch((err) => {
      callback(err);
    });
};

export default getReviews;
