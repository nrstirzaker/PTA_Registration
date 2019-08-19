

const express = require('express');
const config = require('./config/config');
const db = require('./app/models');
const handlebars = require('handlebars');
const moment = require('moment');
const app = express();

handlebars.registerHelper('checked', function(currentValue) {
  return currentValue === true ? ' checked ' : '';
});

handlebars.registerHelper('formatAuditTimestamp', function(dateTime) {

  if (dateTime){
    console.log("dateTime: " + dateTime);
    var resp = moment(dateTime).utc();
    return resp.format("YYYY-MM-DD hh:mm:ss");
  }else{
    console.log("dateTime: " + dateTime);
    return "";
  }
  
});

module.exports = require('./config/express')(app, config);

db.sequelize
  .sync()
  .then(() => {
    if (!module.parent) {
      app.listen(config.port, () => {
        console.log('Express server listening on port ' + config.port);
      });
    }
  }).catch((e) => {
    throw new Error(e);
  });

