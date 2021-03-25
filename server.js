const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const urlDatabase = process.env.DATABASE_URL;
console.log(urlDatabase);
/*
const mongoOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
};

const Author = require('./data/models/Author.js');
const Book = require('./data/models/Book.js');
const Poem = require('./data/models/Poem.js');

mongoose.connect(urlDatabase, mongoOptions);

const server = express();
const port = 8080;

server.get("/authors", function(req, res) {
  Author.find({}, function (err, docs) {
    if (err) {
      res.status(200).json({ error: "Database error" });
    }
    else {
      res.status(200).json(docs);
    }
  });
});

server.get("/books/:idAuthor", function(req, res) {
  Book.find({ idAuthor: req.params.idAuthor }, function (err, docs) {
    if (err) {
      res.status(200).json({ error: "Database error" });
    }
    else {
      res.status(200).json(docs);
    }
  });
});

server.get("/poems/:idBook", function(req, res) {
  Poem.find({ idBook: req.params.idBook }, function (err, docs) {
    if (err) {
      res.status(200).json({ error: "Database error" });
    }
    else {
      res.status(200).json(docs);
    }
  });
});

server.listen(port, () => `Listening on ${port}`);
*/