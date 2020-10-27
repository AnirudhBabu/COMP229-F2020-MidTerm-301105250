// modules required for routing
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// define the book model
let book = require('../models/books');

/* GET books List page. READ */
router.get('/', (req, res, next) => {
  // find all books in the books collection
  book.find( (err, books) => {
    if (err) {
      return console.error(err);
    }
    else {
      res.render('books/index', {
        title: 'Books',
        books: books.sort((a, b) => 
        {
          let sorted = [a.Title, b.Title].sort();
          return sorted[0] == a.Title ? -1 : 1;
        })
      });
    }
  });

});

//  GET the Book Details page in order to add a new Book
router.get('/add', (req, res, next) => {

  res.render('books/details', {
    title: 'Book Details',
    book: {Title: "", Price: "", Author: "", Genre: ""}
  });

});

// POST process the Book Details page and create a new Book - CREATE
router.post('/add', (req, res, next) => {
  let bookToCreate = book({
    "Title": req.body.Title,
    "Author": req.body.Author,
    "Price": req.body.Price,
    "Author": req.body.Author,
    "Genre": req.body.Genre
  });
  console.log(bookToCreate);
  book.create(bookToCreate, (err) =>{
      if(err)
      {
          console.log(err);
          res.end(err);
      }
      else
      {
          //refresh the book list page
          res.redirect('/books');
      }
  });

});

// GET the Book Details page in order to edit an existing Book
router.get('/edit/:id', (req, res, next) => {
  let id = req.params.id;

    // pass id to the db 
    book.findById(id, (err, bookToUpdate) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        // show the update view
        res.render('books/details', 
        {
            title: 'Edit Book',
            book: bookToUpdate,
            id: id
        });
    });
});

// POST - process the information passed from the details form and update the document
router.post('/edit/:id', (req, res, next) => {

  let id = req.params.id;

  book.updateOne({_id: id},
  {
      "_id": id,
      "Title": req.body.Title,
      "Author": req.body.Author,
      "Price": req.body.Price,
      "Genre": req.body.Genre  
  }, (err) => {
      if(err)
      {
          console.log(err);
          res.end(err);
      }
      res.redirect('/books');
  });

});

// GET - process the delete by user id
router.get('/delete/:id', (req, res, next) => {

  let id = req.params.id;

  book.remove({_id: id}, (err) => {
      if(err)
      {
          console.log(err);
          res.end(err);
      }
      res.redirect('/books');
  });
});


module.exports = router;
