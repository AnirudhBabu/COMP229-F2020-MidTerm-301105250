/*
    File Name: index.js (routes)
    Student Name: Anirudh Babu
    Student ID: 301105250
    App Name: comp229-midterm-301105250
*/
// modules required for routing
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// define the game model
let book = require('../models/books');

/* GET home page. wildcard */
router.get('/', (req, res, next) => {
  res.render('content/index', {
    title: 'Home',
    books: ''
   });
});

module.exports = router;
