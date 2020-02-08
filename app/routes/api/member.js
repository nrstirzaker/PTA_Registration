const express = require('express');
const router = express.Router();
const db = require('../../models');
const datadictionary = require('../../modules/datadictionary');
const datasource = require('../../modules/datasource');
const moment = require('moment');
var Logger = require('bunyan');


var logger = new Logger({
  name: 'memberapi',
  streams: [
    {
      stream: process.stdout,
      level: 'debug'
    },
    {
      path: 'hello.log',
      level: 'trace'
    }
  ],
  serializers: {
    req: Logger.stdSerializers.req
  },
});

module.exports = (app) => {
  app.use('/', router);
};

router.get('/', (req, res, next) => {

  res.render('index', {
    title: "Friends of Christ's College (PTA) Registration Page",
  });

});


// router.get('/member', (req, res, next) => {
//   logger.debug('GET:/member: Called with email: ' + req.query.searchEmail);
//   if (!req.query.searchEmail){
//     res.status(200);
//     return res;
//   }
//   db.Member.findOne({ where: { email: req.query.searchEmail } }).then((member) => {
//     var data = JSON.stringify(member);
//     logger.debug('/member: Member found: ' + data);
//     res.status(200);
//     if (member) {

//       var data = {
//         email: member.email,
//         id: member.id,
//         fullName: member.fullName,
//         fullNameYoungestChild: member.fullNameYoungestChild,
//         schoolYear: member.schoolYear,
//         contactNumber: member.contactNumber,
//         committee: member.committee || "false",
//         helper: member.helper || "false",
//         specificEvent: member.specificEvent || "false",
//         secondHandUniform: member.secondHandUniform || "false",
//         information: member.information || "false",
//         agreedPrivacyPolicy: member.agreedPrivacyPolicy || "false",
//         testOnly: member.testOnly || "false",
//         createdOn: member.createdOn,
//         updatedOn: member.updatedOn

//       }

//       res.render('index', data);

//     } else {
//       res.render('index', { email: req.query.searchEmail })
//     }
//   });
// });

router.get('/api/member', (req, res, next) => {
  var email = req.query.searchEmail;
  logger.debug('GET:/api/member: Called with email: ' + email);
  if (!email){
    res.status(200);
    var error = {error:"No Email address specified"};
    res.json(error);
    res.send();
    return;
  }
  db.Member.findOne({ where: { email: email} }).then((member) => {
    var data = member ? JSON.stringify(member) : {'error':'Member with email:' + email + ' not found'};
    logger.debug('/api/member: Member found: ' + data);
    res.status(200);
    if (member) {

      var data = {
        email: member.email,
        id: member.id,
        fullName: member.fullName,
        fullNameYoungestChild: member.fullNameYoungestChild,
        schoolYear: member.schoolYear,
        contactNumber: member.contactNumber,
        committee: member.committee || "false",
        helper: member.helper || "false",
        specificEvent: member.specificEvent || "false",
        secondHandUniform: member.secondHandUniform || "false",
        information: member.information || "false",
        agreedPrivacyPolicy: member.agreedPrivacyPolicy || "false",
        testOnly: member.testOnlyS || "false",
        createdOn: member.createdOn,
        updatedOn: member.updatedOn

      }

      res.json(data);

    } else {
      res.json(data);
    }
  });
});

router.post('/api/member', (req, res, next) => {
  
  logger.debug('POST:/api/member: Called with email: ' + req.body.email);
  //var member;
  if (req.body.id) {
    db.Member.findByPk(req.body.id).then(
      function (member) {
        var data = datadictionary.updateMember(req.body);
        member.update(data)
          .then(Member => res.status(201).render('index', { message: 'your registration has been updated' }))
          .catch(error => res.status(400).send(error));
      }
    )//.then(function(member){
     // res.redirect('index', {

    // db.Member
    //   .update(req.body,
    //     {where: data.uuid})
    //   .then(Member => res.status(201).render('index', { message: 'your registration has been updated' }))
    //   .catch(error => res.status(400).send(error));
  } else {
    var member = datadictionary.createMember(req.body);
    db.Member
      .create(member)
      .then(Member => res.status(201).render('index', { message: 'you have been registered' }))
      .catch(error => res.status(400).send(error));
  }


});

// router.put('/api/member', (req, res, next) => {
//   var data = req.body;
//   logger.debug('PUT:/api/member: Called with email: ' + data.searchEmail);
//   var member;
//   if (data.id) {
//     member = createMember(data)
//   } else {
//     member = updateMember(data)
//   }

//   db.Member
//     .update(member)
//     .then(Member => res.status(201).render('index', { message: "you're details have been updated" }))
//     .catch(error => res.status(400).send(error));
// });