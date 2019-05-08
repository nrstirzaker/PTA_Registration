const express = require('express');
const router = express.Router();
const db = require('../models');

module.exports = (app) => {
  app.use('/', router);
};

router.get('/', (req, res, next) => {
  db.Article.findAll().then((articles) => {
    res.render('index', {
      title: "Friends of Christ's College (PTA) Registration Page",
      articles: articles
    });
  });
});
