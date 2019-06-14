const express = require('express');
const router = express.Router();
const db = require('../models');
const uuid = require('uuid/v1');

module.exports = (app) => {
  app.use('/', router);
};

router.get('/', (req, res, next) => {
  db.Member.findAll().then((member) => {
    res.render('index', {
      title: "Friends of Christ's College (PTA) Registration Page",
      member: member
    });
  });
});


router.get('/api/getMember', (req, res, next) => {
  console.log(req.query.email);
  console.log('getMember');

  db.Member.findOne({ where: {email: req.query.email} }).then((member) => {
    var data = JSON.stringify(member);
    console.log('found member: ' + data);
    res.status(200);
    res.render('index',{
      uuid : member.uuid,
      email: member.email,
      fullName: member.fullName} );
  });
});

router.post('/api/registerMember', (req, res, next) => {
  console.log(req.body.email);
  console.log('here');

  db.Member
      .create({

        id: uuid(),
        email: req.body.email,
        fullName : req.body.fullName,
        fullNameYoungestChild : req.body.youngestChild,
        schoolYear :  req.body.schoolYear,
        contactNumber : req.body.contactNumber,
        committee: req.body.committee,
        helper: req.body.helper,
        specificEvent: req.body.event,
        secondHandUniform: req.body.uniform,
        information: req.body.information,
        agreedPrivacyPolicy : req.body.agreedPrivacyPolicy,
        createdOn : new Date()

      })
      .then(Member => res.status(201).send(Member))
      .catch(error => res.status(400).send(error));
});