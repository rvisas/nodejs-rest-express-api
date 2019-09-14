const express = require('express');
const mongoose = require('mongoose');

const app = express();
const db = mongoose.connect('mongodb://localhost/bookAPI');
const bookRouter = express.Router();
const port = process.env.PORT || 3000;
const Book = require('./models/bookModel');

bookRouter.route('/books')
  .get((req, res) => {
    const query = {};
    if (req.query.genre) {
      query.genre = req.query.genre;
    }
    Book.find(query, (err, books) => 
      (err) ? res.send(err) : res.json(books)
    );
  });

bookRouter.route('/books/:bookId')
  .get((req, res) => {
    Book.findById(req.params.bookId, (err, book) =>
      (err) ? res.send(err) : res.json(book)
    );
  });

app.use('/api', bookRouter);

app.get('/', (request, response) => {
  response.send('Welcome to my Nodemon API');
});

app.listen(port, () => {
  console.log(`Running on the port: ${port}`);
});
