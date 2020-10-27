/*
    File Name: books.js (models)
    Student Name: Anirudh Babu
    Student ID: 301105250
    App Name: comp229-midterm-301105250
*/
let mongoose = require('mongoose');

// create a model class
let Book = mongoose.Schema({
    Title: String,
    Description: String,
    Price: Number,
    Author: String,
    Genre: String
},
{
  collection: "books"
});

module.exports = mongoose.model('Book', Book);
