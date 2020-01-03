const favicon = require('serve-favicon');
const logger = require('morgan');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


module.exports = (app, config) => {
  // Middleware
  app.use(bodyParser.json());
  app.use(cors());

  const posts = require('../routes/api/members');

  app.use('/api/members', posts);

  // Handle production
  if (process.env.NODE_ENV === 'production') {
    // Static folder
    app.use(express.static(__dirname + '/public/'));

    // Handle SPA
    app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
  }

  const port = process.env.PORT || 5000;
  return app;
}


