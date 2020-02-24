CREATE DATABASE airbnb;

USE airbnb;

CREATE TABLE reviews (
  id SERIAL NOT NULL,
  experience_id INTEGER NOT NULL,
  username VARCHAR(20) NOT NULL,
  avatar VARCHAR(150) NOT NULL,
  date date NOT NULL,
  stars INTEGER NOT NULL,
  review VARCHAR NOT NULL,
  PRIMARY KEY(id)
);


