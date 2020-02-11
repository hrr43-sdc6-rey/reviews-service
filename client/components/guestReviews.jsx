import React from 'react';

function GuestReviews({ overallStar }) {
  if (overallStar < 0.5) {
    return (
      <div className="guestReviews">
        <div className="aggRating">
          <h2>Guest reviews</h2>
          <div className="starsNum">
            <div className="aggNum">
              {overallStar}
            </div>
            <div className="aggStars">
              &#9734;&#9734;&#9734;&#9734;&#9734;
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (overallStar >= 0.5 && overallStar < 1.5) {
    return (
      <div className="guestReviews">
        <div className="aggRating">
          <h2>Guest reviews</h2>
          <div className="starsNum">
            <div className="aggNum">
              {overallStar}
            </div>
            <div className="aggStars">
              &#9733;&#9734;&#9734;&#9734;&#9734;
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (overallStar >= 1.5 && overallStar < 2.5) {
    return (
      <div className="guestReviews">
        <div className="aggRating">
          <h2>Guest reviews</h2>
          <div className="starsNum">
            <div className="aggNum">
              {overallStar}
            </div>
            <div className="aggStars">
              &#9733;&#9733;&#9734;&#9734;&#9734;
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (overallStar >= 2.5 && overallStar < 3.5) {
    return (
      <div className="guestReviews">
        <div className="aggRating">
          <h2>Guest reviews</h2>
          <div className="starsNum">
            <div className="aggNum">
              {overallStar}
            </div>
            <div className="aggStars">
              &#9733;&#9733;&#9733;&#9734;&#9734;
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (overallStar >= 3.5 && overallStar < 4.5) {
    return (
      <div className="guestReviews">
        <div className="aggRating">
          <h2>Guest reviews</h2>
          <div className="starsNum">
            <div className="aggNum">
              {overallStar}
            </div>
            <div className="aggStars">
              &#9733;&#9733;&#9733;&#9733;&#9734;
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (overallStar >= 4.5) {
    return (
      <div className="guestReviews">
        <div className="aggRating">
          <h2>Guest reviews</h2>
          <div className="starsNum">
            <div className="aggNum">
              {overallStar}
            </div>
            <div className="aggStars">
              &#9733;&#9733;&#9733;&#9733;&#9733;
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GuestReviews;
