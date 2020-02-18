const favicon = require('serve-favicon');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

module.exports = (app, config) => {
  // Middleware
  app.use(bodyParser.json());
  app.use(cors());

  app.use(require('express-bunyan-logger')({
    name: 'logger',
    streams: [{
      level: 'info',
      stream: process.stdout
    }]
  }));

  app.use(function (req, res, next) {
    req.log.debug('this is debug in middleware');
    next();
  });
  
  app.use(require('express-bunyan-logger').errorLogger());

  const member = require('../routes/api/memberAirTable')(app);

  //app.use('/api/member', member);

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


